import './Header.css'

function Header({ onOpenModal }) {
  const handleLogoClick = () => {
    window.open('https://fuze.io', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <header className="header-fixed">
        <div className="header-content">
          <div className="logo-container" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src="/Logo_FUZE.png" alt="FUZE Logo" className="logo-image" />
            <span className="logo-text">Avatar Hub</span>
          </div>
          <button className="create-btn" onClick={onOpenModal}>
            <span className="btn-text-full">Create My Own</span>
            <span className="btn-text-short">Create</span>
          </button>
        </div>
      </header>
      <div className="header-spacer"></div>
      <div className="header-banner">
        <span className="banner-text-main">Create your style for free, no login needed.</span>
        <span className="banner-text-tip"><strong>Tips:</strong> Best experienced on desktop</span>
      </div>
    </>
  )
}

export default Header
