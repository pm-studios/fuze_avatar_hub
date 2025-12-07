import './Header.css'

function Header({ onOpenModal }) {
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
        <button className="create-btn" onClick={onOpenModal}>
          Create My Own
        </button>
      </div>
      <div className="header-banner">
        <span>Create your style for free, no login needed.</span>
      </div>
    </header>
  )
}

export default Header
