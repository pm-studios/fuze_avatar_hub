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
          <div className="banner-content">
            <div className="banner-placeholder">AD</div>
          </div>
        </aside>

        <div className="main-content">
          <Header />
          <Hero />
          <AvatarGrid onOpenModal={() => setIsModalOpen(true)} />
        </div>

        <aside className="side-banner side-banner-right">
          <div className="banner-content">
            <div className="banner-placeholder">AD</div>
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
