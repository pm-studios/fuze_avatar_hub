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
    trackBannerClick('side_banner_left', 'https://recap.fuze.io')
    window.open('https://recap.fuze.io', '_blank', 'noopener,noreferrer')
  }

  const handleRightBannerClick = (e) => {
    e.preventDefault()
    trackBannerClick('side_banner_right', 'https://fuze.io')
    window.open('https://fuze.io', '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <div className="app">
        <aside className="side-banner side-banner-left">
          <a href="https://recap.fuze.io" target="_blank" rel="noopener noreferrer" className="banner-content" onClick={handleLeftBannerClick}>
            <img src="/avatar_left_ads.jpg" alt="recap.fuze.io" className="banner-image" />
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
            <div className="banner-header">
              <p className="banner-tagline">Share Your<br/><span className="tagline-highlight">Gaming Moments</span></p>
            </div>
            <video
              src="/fuze.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="banner-video"
            />
            <div className="banner-overlay">
              <h3 className="banner-title">What Are You Playing Today?</h3>
              <button className="banner-button">Talk Gamers</button>
            </div>
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
