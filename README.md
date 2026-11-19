# PANAX Avatar Hub

https://avatar.panaxgames.com — PANAX 아바타 갤러리 + 아바타 편집 웹.

- Vite + React 19
- 갤러리: `oz-avatar-grid.js`, 편집 모달: `oz-avatar-editor.js` — 둘 다 AvatarWeb(oz_unity/unity/AvatarWeb) 빌드를 CDN에서 불러온다. localhost 에선 `public/`의 심볼릭 링크로 로컬 빌드를 쓴다.
- 지표: Mixpanel (`src/utils/mixpanel.js`)

## 실행

```bash
npm install
npm run dev
```

## 배포

`npm run deploy-dev` / `npm run deploy-prod` — 빌드 결과를 `dev`/`prod` 브랜치에 push → AWS S3 + CloudFront. 자세한 건 [DEPLOYMENT.md](./DEPLOYMENT.md).
