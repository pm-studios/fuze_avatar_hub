import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src="/Logo_FUZE.png" alt="FUZE Logo" className="logo-image" />
          <span className="logo-text">Avatar Hub</span>
        </div>
      </div>
    </header>
  )
}

export default Header
