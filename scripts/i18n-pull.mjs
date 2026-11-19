#!/usr/bin/env node
/**
 * 다국어 문구 받기: 구글 시트(정본) → src/i18n/strings.json
 *
 *   npm run i18n:pull                 # 구글 시트에서 받기 (scripts/i18n-sheet.json 의 시트 id·탭 이름)
 *   npm run i18n:pull -- --file a.csv # 받아 둔 CSV/TSV 로 만들기
 *
 * 시트 하나를 여러 프로젝트가 나눠 쓴다 — 프로젝트마다 탭 하나 (자세히 I18N.md).
 * 탭 형식: 첫 줄 = key, en, ko, ja, note. 셀 안 줄바꿈 또는 "\n" 글자 = 줄바꿈.
 * 시트는 "링크가 있는 사용자 보기" 이상이어야 CSV 로 받을 수 있다.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'src/i18n/strings.json')
const CONF = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/i18n-sheet.json'), 'utf8'))
const SHEET_ID = process.env.I18N_SHEET_ID || CONF.id
const SHEET_TAB = process.env.I18N_SHEET_TAB || CONF.tab
const LANGS = ['en', 'ko', 'ja']

function parseDelimited(text, sep) {
  const rows = []
  let row = [], cell = '', q = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++ }
      else if (c === '"') q = false
      else cell += c
    } else if (c === '"' && cell === '') q = true
    else if (c === sep) { row.push(cell); cell = '' }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++
      row.push(cell); rows.push(row); row = []; cell = ''
    } else cell += c
  }
  if (cell || row.length) { row.push(cell); rows.push(row) }
  return rows
}

async function main() {
  const fi = process.argv.indexOf('--file')
  let text, sep = ','
  if (fi > 0) {
    const f = process.argv[fi + 1]
    text = fs.readFileSync(f, 'utf8')
    if (f.endsWith('.tsv')) sep = '\t'
  } else {
    // 탭 이름으로 받는다 (gviz CSV — export?format=csv 는 gid 숫자가 필요해서)
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&headers=0&sheet=${encodeURIComponent(SHEET_TAB)}`
    const res = await fetch(url, { redirect: 'follow' })
    if (!res.ok) throw new Error(`시트를 받지 못함 (${res.status}) — 시트 공유가 "링크가 있는 사용자 보기"인지 확인`)
    text = await res.text()
    if (text.trimStart().startsWith('<')) throw new Error('CSV 대신 로그인 페이지가 왔음 — 시트 공유 설정 확인')
  }
  text = text.replace(/^﻿/, '')
  const [head, ...rows] = parseDelimited(text, sep)
  const col = Object.fromEntries(head.map((h, i) => [h.trim().toLowerCase(), i]))
  for (const k of ['key', ...LANGS]) if (col[k] == null) throw new Error(`열 없음: ${k}`)
  const out = {}
  const missing = []
  for (const r of rows) {
    const key = (r[col.key] || '').trim()
    if (!key || key.startsWith('#')) continue
    if (out[key]) throw new Error(`키 중복: ${key}`)
    const entry = {}
    for (const l of LANGS) {
      const v = (r[col[l]] || '').replace(/\\n/g, '\n')
      if (v) entry[l] = v
      else missing.push(`${key}:${l}`)
    }
    out[key] = entry
  }
  fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n')
  console.log(`✓ ${Object.keys(out).length}개 키 → ${path.relative(ROOT, OUT)}`)
  if (missing.length) console.log(`  빈 칸(영어로 표시됨) ${missing.length}개: ${missing.slice(0, 20).join(', ')}${missing.length > 20 ? ' …' : ''}`)
  // 코드에서 쓰는데 시트에 없는 키
  const used = new Set()
  const walk = (d) => { for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name)
    if (f.isDirectory()) walk(p)
    else if (/\.(jsx?|tsx?)$/.test(f.name)) for (const m of fs.readFileSync(p, 'utf8').matchAll(/\bt[lj]?\(\s*'([a-z0-9_]+\.[a-z0-9_.]+)'/g)) used.add(m[1])
  } }
  walk(path.join(ROOT, 'src'))
  const notInSheet = [...used].filter((k) => !out[k])
  if (notInSheet.length) { console.error(`✗ 코드에는 있는데 시트에 없는 키: ${notInSheet.join(', ')}`); process.exitCode = 1 }
}
main().catch((e) => { console.error('✗', e.message); process.exit(1) })
