# MyWebsite - React Landing Page

Modern and responsive landing page built with React and Vite.

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
cd my-react-website
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
my-react-website/
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
