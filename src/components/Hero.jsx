import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Fuze Avatar Hub</h1>
        <p className="hero-subtitle">
          Build amazing things with React and modern web technologies
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
