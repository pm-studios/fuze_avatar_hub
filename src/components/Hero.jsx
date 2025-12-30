import './Hero.css'
import { trackBannerClick } from '../utils/mixpanel'

function Hero() {
  const handleClick = () => {
    trackBannerClick('hero_banner', 'https://fuze.io/community/180594/')
    window.open('https://fuze.io/community/180594/', '_blank')
  }

  return (
    <section className="hero-section" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="hero-wrapper">
        <div className="hero">
          <img src="/AvatarImage2.png" alt="Avatar characters" className="hero-avatar" />
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">Discover Gamer Styles</h1>
              <p className="hero-subtitle">
                Meet the gamers and conversations <br />
                behind every style.
              </p>
              <div className="hero-badge">
                Meet the gamers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
