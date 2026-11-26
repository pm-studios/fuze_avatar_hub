# Deployment Guide

## Branch Structure

- `main` - 소스코드 브랜치
- `dev` - 개발 환경 배포 브랜치 (빌드 결과물) → https://d3cbg89fw3t9m6.cloudfront.net
- `prod` - 프로덕션 환경 배포 브랜치 (빌드 결과물) → https://avatar.panaxgames.com

## Deployment Commands

```bash
npm run deploy-dev     # 개발
npm run deploy-prod    # 프로덕션
```

## Important Notes

1. **"배포해" = 배포 스크립트 실행**
   - ❌ `git push`로 소스 푸시하는 것이 아님
   - ✅ `npm run deploy-dev` 또는 `npm run deploy-prod` 실행

2. **배포 스크립트 동작** (`scripts/deploy.cjs`)
   - 빌드 (`npm run build`)
   - 배포 브랜치를 임시 폴더(git worktree)에 꺼내 빌드 결과로 바꿔 커밋·푸시
   - 임시 폴더 삭제
   - **작업 폴더는 건드리지 않는다** — 커밋 안 한 변경이 있어도 되고, 브랜치를 바꾸지도 않는다.
     배포되는 것은 지금 폴더의 파일 그대로(커밋 안 한 변경 포함)이니, 배포 전 `git status` 로 확인.
   - localhost 개발용 `public/oz-avatar-*.js` 링크는 배포본에서 뺀다.

3. **반영 시간**: 푸시 뒤 CloudFront 에 보이기까지 보통 1분 안.

## Troubleshooting

- `fatal: '<폴더>' already exists` / worktree 관련 오류: `git worktree prune` 뒤 다시 실행.
- 푸시가 거절됨(다른 곳에서 먼저 배포): 다시 실행하면 최신 배포 브랜치 위에 올린다.
