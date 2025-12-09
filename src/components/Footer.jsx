import './Footer.css'

function Footer() {
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
              <a href="https://fuze.io/about-us/" target="_blank" rel="noopener noreferrer">About Us</a>
            </div>
            <a href="https://x.com/fuze4gamers" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/x.png" alt="X" />
            </a>
            <a href="https://www.threads.com/@fuzegames_official" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/thread.png" alt="Threads" />
            </a>
            <a href="https://www.tiktok.com/@fuzegames_official" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/tiktok.png" alt="TikTok" />
            </a>
            <a href="https://www.youtube.com/@fuzegames_official?themeRefresh=1" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/youtube.png" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
