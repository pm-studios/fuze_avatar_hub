#!/usr/bin/env node
/**
 * 배포: 빌드 결과(dist)를 dev / prod 브랜치에 올린다 → AWS(S3 + CloudFront)가 그 브랜치를 내보낸다.
 *
 * 작업 폴더는 건드리지 않는다 — 배포 브랜치는 임시 폴더(git worktree)에 따로 꺼내 쓴다.
 * (예전 방식은 지금 폴더에서 브랜치를 바꾸고 파일을 전부 지웠다가 되돌려서, 커밋 안 한 변경을 stash 하고
 *  node_modules 를 매번 다시 깔았고, 도중에 실패하면 폴더가 배포 브랜치 상태로 남았다.)
 */
const { execSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const environment = process.argv[2];
if (!['dev', 'prod'].includes(environment)) {
  console.error('❌ Usage: node scripts/deploy.cjs <dev|prod>');
  process.exit(1);
}
const root = path.resolve(__dirname, '..');
const distPath = path.join(root, 'dist');
const run = (cmd, cwd = root, stdio = 'pipe') => execSync(cmd, { cwd, stdio });
// localhost 개발용 링크(public/oz-avatar-*.js → AvatarWeb 로컬 빌드)는 배포본에 넣지 않는다 — 배포된 페이지는 CDN 것을 쓴다
const SKIP = new Set(['oz-avatar-editor.js', 'oz-avatar-grid.js']);

console.log(`\n🚀 ${environment} 배포 시작\n`);
let worktree = null;
try {
  if (!fs.existsSync(path.join(root, 'node_modules'))) run('npm install', root, 'inherit');

  console.log('🔨 빌드');
  fs.rmSync(distPath, { recursive: true, force: true });
  fs.rmSync(path.join(root, 'node_modules/.vite'), { recursive: true, force: true });
  run('npm run build', root, 'inherit');
  if (!fs.existsSync(path.join(distPath, 'index.html'))) throw new Error('빌드 결과에 index.html 이 없다');

  console.log(`🌿 ${environment} 브랜치를 임시 폴더에 꺼냄`);
  run(`git fetch origin ${environment}`);
  run('git worktree prune');
  worktree = fs.mkdtempSync(path.join(os.tmpdir(), `avatar-hub-${environment}-`));
  run(`git worktree add --detach "${worktree}" origin/${environment}`);

  for (const f of fs.readdirSync(worktree)) {
    if (f !== '.git') fs.rmSync(path.join(worktree, f), { recursive: true, force: true });
  }
  for (const f of fs.readdirSync(distPath)) {
    if (SKIP.has(f)) continue;
    fs.cpSync(path.join(distPath, f), path.join(worktree, f), { recursive: true });
  }

  run('git add -A', worktree);
  const changed = run('git status --porcelain', worktree).toString().trim();
  if (!changed) {
    console.log('   바뀐 것이 없다 — 올리지 않음');
  } else {
    run(`git commit -m "Deploy ${environment} build - ${new Date().toISOString()}"`, worktree);
    console.log(`🚀 origin/${environment} 로 푸시`);
    run(`git push origin HEAD:${environment}`, worktree, 'inherit');
    run(`git fetch origin ${environment}`);
  }
  console.log(`\n✨ Successfully deployed to ${environment} branch!\n`);
} catch (error) {
  console.error('\n❌ Deployment failed:', error.message);
  process.exitCode = 1;
} finally {
  if (worktree) {
    try { run(`git worktree remove --force "${worktree}"`); } catch { fs.rmSync(worktree, { recursive: true, force: true }); }
    try { run('git worktree prune'); } catch { /* 무시 */ }
  }
}
