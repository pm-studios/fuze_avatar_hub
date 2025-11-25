import './Footer.css'

function Footer({ onOpenModal }) {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <span className="footer-text">Design your unique gamer style</span>
        <button className="footer-btn" onClick={onOpenModal}>
          Create Avatar for Free
        </button>
      </div>
    </footer>
  )
}

export default Footer
