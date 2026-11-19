import './Hero.css'
import { trackBannerClick } from '../utils/mixpanel'
import { t, tl } from '../i18n'

function Hero() {
  const handleClick = () => {
    trackBannerClick('hero_banner', 'https://panaxgames.com')
    window.open('https://panaxgames.com', '_blank')
  }

  return (
    <section className="hero-section" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="hero-wrapper">
        <div className="hero">
          <img src="/AvatarImage.png" alt={t('hero.image_alt')} className="hero-avatar" />
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">{t('hero.title')}</h1>
              <p className="hero-subtitle">
                {tl('hero.subtitle')}
              </p>
              <div className="hero-badge">
                {t('hero.badge')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
