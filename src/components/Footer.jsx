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
          <p className="footer-copyright">©2025 FUZE Games, Inc. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <div className="footer-social">
            <div className="footer-links">
              <a href="https://fuze.io/about-us/" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick('about_us', 'https://fuze.io/about-us/')}>About Us</a>
            </div>
            <a href="https://x.com/fuze4gamers" target="_blank" rel="noopener noreferrer" className="social-link" onClick={handleLinkClick('social_x', 'https://x.com/fuze4gamers')}>
              <img src="/x.png" alt="X" />
            </a>
            <a href="https://www.threads.com/@fuzegames_official" target="_blank" rel="noopener noreferrer" className="social-link" onClick={handleLinkClick('social_threads', 'https://www.threads.com/@fuzegames_official')}>
              <img src="/thread.png" alt="Threads" />
            </a>
            <a href="https://www.tiktok.com/@fuzegames_official" target="_blank" rel="noopener noreferrer" className="social-link" onClick={handleLinkClick('social_tiktok', 'https://www.tiktok.com/@fuzegames_official')}>
              <img src="/tiktok.png" alt="TikTok" />
            </a>
            <a href="https://www.youtube.com/@fuzegames_official?themeRefresh=1" target="_blank" rel="noopener noreferrer" className="social-link" onClick={handleLinkClick('social_youtube', 'https://www.youtube.com/@fuzegames_official?themeRefresh=1')}>
              <img src="/youtube.png" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
