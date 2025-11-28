import './Hero.css'

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <div className="hero">
          <img src="/header_avatar.png" alt="Avatar characters" className="hero-avatar" />
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">Create Your Gamer Style</h1>
              <p className="hero-subtitle">
                Build your avatar to express yourself,<br />
                connect with gamers, and join FUZE.
              </p>
              <div className="hero-badge">
                Look around FUZE
              </div>
            </div>
          </div>
        </div>
        <div className="hero-spacer"></div>
      </div>
    </section>
  )
}

export default Hero
