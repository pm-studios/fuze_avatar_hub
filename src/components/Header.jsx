import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <span className="logo-fuze">FUZE</span>
          <span className="logo-text">Avatar Hub TEST</span>
        </div>
        <a href="https://avatar.fuze.io" className="header-link" target="_blank" rel="noopener noreferrer">
          avatar.fuze.io
        </a>
      </div>
    </header>
  )
}

export default Header
