import { useState } from 'react'
import Header from './components/Header'
import { trackBannerClick } from './utils/mixpanel'
import Hero from './components/Hero'
import AvatarGrid from './components/AvatarGrid'
import Footer from './components/Footer'
import UnityAvatarModal from './components/UnityAvatarModal'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLeftBannerClick = (e) => {
    e.preventDefault()
    trackBannerClick('side_banner_left', 'https://recap.panaxgames.com')
    window.open('https://recap.panaxgames.com', '_blank', 'noopener,noreferrer')
  }

  const handleRightBannerClick = (e) => {
    e.preventDefault()
    trackBannerClick('side_banner_right', 'https://panaxgames.com')
    window.open('https://panaxgames.com', '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <div className="app">
        <aside className="side-banner side-banner-left">
          <a href="https://recap.panaxgames.com" target="_blank" rel="noopener noreferrer" className="banner-content" onClick={handleLeftBannerClick}>
            <img src="/avatar left ads.jpg" alt="recap.fuze.io" className="banner-image" />
          </a>
        </aside>

        <div className="main-content">
          <Header onOpenModal={() => setIsModalOpen(true)} />
          <Hero />
          <AvatarGrid onOpenModal={() => setIsModalOpen(true)} />
          <Footer />
        </div>

        <aside className="side-banner side-banner-right">
          <div className="banner-content banner-video-wrapper" onClick={handleRightBannerClick}>
            <img src="/avatar right ads.jpg" alt="fuze.io" className="banner-bg-image" />
            {/* 임시: 영상 비활성화. 복원 시 아래 주석 해제
            <video
              src="/fuze.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="banner-video"
            />
            */}
          </div>
        </aside>
      </div>

      <UnityAvatarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default App
