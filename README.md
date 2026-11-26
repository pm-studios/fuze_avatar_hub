# PANAX Avatar Hub

https://avatar.panaxgames.com — PANAX 아바타 갤러리 + 아바타 편집 웹.

- Vite + React 19
- 갤러리: `oz-avatar-grid.js`, 편집 모달: `oz-avatar-editor.js` — 둘 다 AvatarWeb(oz_unity/unity/AvatarWeb) 빌드를 CDN에서 불러온다. localhost 에선 `public/`의 링크로 로컬 빌드를 쓴다 (링크는 저장소에 없다 — 아래 '로컬 AvatarWeb 빌드로 보기').
- 지표: Mixpanel (`src/utils/mixpanel.js`)

## 실행

```bash
npm install
npm run dev
```

### 로컬 AvatarWeb 빌드로 보기

localhost 에서는 `/oz-avatar-editor.js`·`/oz-avatar-grid.js` 를 읽는다. 처음 한 번 링크를 만든다 (oz_unity 가 옆 폴더에 있을 때):

```bash
ln -sf "$(cd ../oz_unity/unity/AvatarWeb && pwd)/dist/oz-avatar-editor.js" public/oz-avatar-editor.js
ln -sf "$(cd ../oz_unity/unity/AvatarWeb && pwd)/dist/oz-avatar-grid.js" public/oz-avatar-grid.js
```

AvatarWeb 에서 `npm run build` 하면 바로 반영된다. 이 링크는 배포본에 들어가지 않는다.
폰에서 보기: `adb reverse tcp:5173 tcp:5173` 뒤 폰 Chrome 에서 `http://localhost:5173`.

## 배포

`npm run deploy-dev` / `npm run deploy-prod` — 빌드 결과를 `dev`/`prod` 브랜치에 push → AWS S3 + CloudFront. 자세한 건 [DEPLOYMENT.md](./DEPLOYMENT.md).
