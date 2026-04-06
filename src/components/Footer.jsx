import './Footer.css'
import { trackLinkClick } from '../utils/mixpanel'

function Footer() {
  const handleLinkClick = (linkName, url) => (e) => {
    e.preventDefault()
    trackLinkClick(linkName, url)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <footer className="footer">
      <div className="footer-divider"></div>
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-copyright">©2026 PANAX™, Inc. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <div className="footer-social">
            <div className="footer-links">
              <a href="https://panaxgames.com" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick('about_us', 'https://panaxgames.com')}>About Us</a>
            </div>
            <a href="https://x.com/PANAXofficial" target="_blank" rel="noopener noreferrer" className="social-link" onClick={handleLinkClick('social_x', 'https://x.com/PANAXofficial')}>
              <img src="/x.png" alt="X" />
            </a>
            <a href="https://www.threads.com/@panaxgames" target="_blank" rel="noopener noreferrer" className="social-link" onClick={handleLinkClick('social_threads', 'https://www.threads.com/@panaxgames')}>
              <img src="/thread.png" alt="Threads" />
            </a>
            <a href="https://www.tiktok.com/@panaxofficial" target="_blank" rel="noopener noreferrer" className="social-link" onClick={handleLinkClick('social_tiktok', 'https://www.tiktok.com/@panaxofficial')}>
              <img src="/tiktok.png" alt="TikTok" />
            </a>
            <a href="https://www.youtube.com/@PANAXgames" target="_blank" rel="noopener noreferrer" className="social-link" onClick={handleLinkClick('social_youtube', 'https://www.youtube.com/@PANAXgames')}>
              <img src="/youtube.png" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
