import './Features.css'

function Features() {
  const features = [
    {
      title: 'Fast Performance',
      description: 'Built with Vite for lightning-fast development and optimal production builds',
      icon: '⚡'
    },
    {
      title: 'Modern Design',
      description: 'Clean and responsive design that works perfectly on all devices',
      icon: '🎨'
    },
    {
      title: 'Easy to Deploy',
      description: 'Deploy to Vercel, Netlify, or any hosting platform with just one command',
      icon: '🚀'
    }
  ]

  return (
    <section className="features" id="services">
      <div className="features-content">
        <h2 className="features-title">Why Choose Us?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
