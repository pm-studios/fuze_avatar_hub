import { useState } from 'react'
import UnityAvatarModal from './UnityAvatarModal'
import './Hero.css'

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="hero-section">
        <div className="hero-wrapper">
          <div className="hero">
            <div className="hero-container">
              <div className="hero-content">
                <h1 className="hero-title">Create Your Gamer Style</h1>
                <p className="hero-subtitle">
                  Build your avatar to express yourself, connect with gamers, and join FUZE.
                </p>
                <button className="hero-btn" onClick={() => setIsModalOpen(true)}>
                  Look around FUZE
                </button>
              </div>
            </div>
          </div>
          <div className="hero-spacer"></div>
        </div>
      </section>

      <UnityAvatarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default Hero
