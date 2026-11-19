/**
 * 다국어 (en·ko·ja). 문구 정본은 구글 시트 — `npm run i18n:pull` 이 시트를 받아 strings.json 을 만든다.
 * 언어는 페이지를 열 때 한 번 정한다: ?lang= > en (지금은 영어 고정, 헤더 언어 선택 숨김).
 * 바꾸면 setLang() 이 저장하고 새로 고친다(화면 전체가 한 언어로 다시 그려지게).
 */
import { createElement } from 'react'
import STRINGS from './strings.json'

export const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'ko', label: '한국어' },
  { code: 'ja', label: '日本語' },
]
const CODES = LANGS.map((l) => l.code)
const STORE_KEY = 'avatar_hub_lang'

function pick(v) {
  if (!v) return null
  const c = String(v).toLowerCase().slice(0, 2)
  return CODES.includes(c) ? c : null
}

// 지금은 영어 고정: 헤더 언어 선택을 숨기고 브라우저 언어·저장된 선택은 보지 않는다.
// ?lang=ko 처럼 URL 로 들어올 때만 그 언어 (2026-11-19 결정).
function detect() {
  if (typeof window === 'undefined') return 'en'
  try {
    const q = pick(new URLSearchParams(window.location.search).get('lang'))
    if (q) return q
  } catch { /* noop */ }
  return 'en'
}

export const LANG = detect()
if (typeof document !== 'undefined') document.documentElement.lang = LANG

/** t('key', { n: 3 }) — 그 언어 문구가 비어 있으면 영어, 영어도 없으면 키를 그대로. {n} 자리를 채운다. */
export function t(key, vars) {
  const row = STRINGS[key]
  let s = row ? (row[LANG] || row.en) : null
  if (s == null) {
    if (import.meta.env?.DEV) console.warn('[i18n] missing key', key)
    s = key
  }
  if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? vars[k] : m))
  return s
}

/** 줄바꿈(\n)이 든 문구를 JSX 로: <br/> 로 나눈다. */
export function tl(key, vars) {
  const parts = t(key, vars).split('\n')
  return parts.flatMap((p, i) => (i ? [{ br: i }, p] : [p])).map((p) =>
    typeof p === 'string' ? p : BR(p.br))
}
const BR = (k) => createElement('br', { key: `br${k}` })

export function setLang(code) {
  if (!CODES.includes(code) || code === LANG) return
  try { localStorage.setItem(STORE_KEY, code) } catch { /* noop */ }
  const u = new URL(window.location.href)
  u.searchParams.delete('lang')
  window.location.replace(u.toString())
}

/** 자리에 JSX 를 넣는 문구: tj('key', { link: <a/> }) → 배열. 문구의 {link} 자리에 요소가 들어간다. */
export function tj(key, parts) {
  const s = t(key)
  const out = []
  let last = 0
  s.replace(/\{(\w+)\}/g, (m, k, i) => {
    out.push(s.slice(last, i))
    out.push(parts[k] != null ? parts[k] : m)
    last = i + m.length
    return m
  })
  out.push(s.slice(last))
  return out.map((p, i) => (typeof p === 'string' || p == null ? p : createElement('span', { key: `p${i}`, style: { display: 'contents' } }, p)))
}
