import './Hero.css'

function Hero() {
  const handleClick = () => {
    window.open('https://fuze.io/community/180386/', '_blank')
  }

  return (
    <section className="hero-section" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="hero-wrapper">
        <div className="hero">
          <img src="/AvatarImage.png" alt="Avatar characters" className="hero-avatar" />
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">Make your best look-alike</h1>
              <p className="hero-subtitle">
                Try your best match, see what others <br />
                have made, and dive into the challenge.
              </p>
              <div className="hero-badge">
                See the event
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
