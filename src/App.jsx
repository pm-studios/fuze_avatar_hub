import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AvatarGrid from './components/AvatarGrid'
import Footer from './components/Footer'
import UnityAvatarModal from './components/UnityAvatarModal'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="app">
        <aside className="side-banner side-banner-left">
          <a href="https://recap.fuze.io" target="_blank" rel="noopener noreferrer" className="banner-content">
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
          <a href="https://fuze.io" target="_blank" rel="noopener noreferrer" className="banner-content">
            <img src="/avatar_right_ads.jpg" alt="fuze.io" className="banner-image" />
          </a>
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
