# Deployment Guide

## Branch Structure

- `main` - 소스코드 브랜치
- `dev` - 개발 환경 배포 브랜치 (빌드 결과물)
- `prod` - 프로덕션 환경 배포 브랜치 (빌드 결과물)

## Deployment Commands

### Development Deployment
```bash
npm run deploy-dev
```

### Production Deployment
```bash
npm run deploy-prod
```

## Important Notes

1. **"배포해" = 배포 스크립트 실행**
   - ❌ `git push`로 소스 푸시하는 것이 아님
   - ✅ `npm run deploy-dev` 또는 `npm run deploy-prod` 실행

2. **배포 전 확인사항**
   - git staging area가 깨끗한지 확인: `git status`
   - node_modules 등이 staged 되어 있으면 배포 실패
   - 해결: `git restore --staged .`

3. **배포 스크립트 동작**
   - 빌드 생성 (`npm run build`)
   - 해당 브랜치로 전환
   - 빌드 결과물을 브랜치 루트에 복사
   - 커밋 및 푸시
   - 원래 브랜치로 복귀

## Troubleshooting

### "fatal: a branch named 'prod' already exists" 에러
```bash
# staging area 정리
git restore --staged .

# 다시 배포 실행
npm run deploy-prod
```
