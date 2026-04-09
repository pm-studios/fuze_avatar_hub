import './Hero.css'
import { trackBannerClick } from '../utils/mixpanel'

function Hero() {
  const handleClick = () => {
    trackBannerClick('hero_banner', 'https://panaxgames.com')
    window.open('https://panaxgames.com', '_blank')
  }

  return (
    <section className="hero-section" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="hero-wrapper">
        <div className="hero">
          <img src="/AvatarImage.png" alt="Avatar characters" className="hero-avatar" />
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">Every Avatar Has a Voice</h1>
              <p className="hero-subtitle">
                Discover unique gamer styles <br />
                and the conversations on PANAX.
              </p>
              <div className="hero-badge">
                Join the Conversation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
