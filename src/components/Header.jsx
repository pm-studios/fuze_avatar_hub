import './Header.css'

function Header() {
  const handleLogoClick = () => {
    window.open('https://fuze.io', '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src="/Logo_FUZE.png" alt="FUZE Logo" className="logo-image" />
          <span className="logo-text">Avatar Hub</span>
        </div>
      </div>
    </header>
  )
}

export default Header
