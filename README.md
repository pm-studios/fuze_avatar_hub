# Fuze Avatar Hub

Modern avatar customization platform with AI-powered face analysis.

## 🎯 프로젝트 개요

1. **React 랜딩 페이지** - Modern and responsive landing page
2. **AI 얼굴 분석 시스템** - 사진 업로드 → 3D 아바타 자동 생성

## 📖 작업 컨텍스트

**중요: 작업을 이어서 하려면 [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md)를 먼저 읽으세요!**

- 프로젝트 목표 및 현재 진행 상황
- 다음 작업 단계
- AI API 가격 비교
- 얼굴 분석 가능 항목

---

## 🤖 AI 아바타 시스템

### 테스트 실행
```bash
npm install canvas  # 이미지 처리 라이브러리
node create-avatar.cjs  # 2D 아바타 생성 테스트
```

### 주요 파일
- `create-avatar.cjs` - 파츠 조합 테스트
- `avatar-parts-database.json` - 파츠 데이터베이스
- `face.png` - 테스트용 얼굴 사진
- `generated_avatar.png` - 생성 결과

---

## 🌐 React 랜딩 페이지

## Features

- Fast Performance with Vite
- Responsive Design
- Modern UI/UX
- Easy to Deploy

## Tech Stack

- React 19
- Vite 7
- CSS3

## Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd fuze_avatar_hub
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel

1. Install Vercel CLI (optional)
```bash
npm i -g vercel
```

2. Deploy
```bash
vercel
```

Or simply:
- Push your code to GitHub
- Import the project on [Vercel](https://vercel.com)
- Vercel will automatically detect the Vite configuration

### Deploy to Netlify

1. Install Netlify CLI (optional)
```bash
npm i -g netlify-cli
```

2. Deploy
```bash
netlify deploy --prod
```

Or simply:
- Push your code to GitHub
- Import the project on [Netlify](https://netlify.com)
- Netlify will automatically use the `netlify.toml` configuration

### Deploy to GitHub Pages

1. Update `vite.config.js` to set the base path:
```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/'
})
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

4. Deploy:
```bash
npm run deploy
```

## Project Structure

```
fuze_avatar_hub/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   └── Footer.jsx
│   ├── App.jsx      # Main App component
│   ├── App.css      # App styles
│   ├── index.css    # Global styles
│   └── main.jsx     # Entry point
├── index.html       # HTML template
├── package.json     # Dependencies
└── vite.config.js   # Vite configuration
```

## Customization

### Changing Colors

Edit the gradient colors in component CSS files:
- Header: `src/components/Header.css`
- Hero: `src/components/Hero.css`
- Other components have their respective CSS files

### Adding Pages

1. Create new component in `src/components/`
2. Import and add to `App.jsx`

### Modifying Content

Edit the component files to change text, images, and structure:
- Hero section: `src/components/Hero.jsx`
- Features: `src/components/Features.jsx`
- Footer links: `src/components/Footer.jsx`

## License

MIT License - feel free to use this project for your own purposes.

## Contributing

Pull requests are welcome! For major changes, please open an issue first.
