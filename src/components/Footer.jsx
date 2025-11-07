import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <span className="footer-text">Design your unique gamer style</span>
        <button className="footer-btn" onClick={() => window.open('https://avatar.fuze.io', '_blank')}>
          Create Avatar for Free
        </button>
      </div>
    </footer>
  )
}

export default Footer
