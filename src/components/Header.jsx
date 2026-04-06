import './Header.css'
import { trackButtonClick, trackBannerClick } from '../utils/mixpanel'

function Header({ onOpenModal }) {
  const handleLogoClick = () => {
    trackBannerClick('header_logo', 'https://panaxgames.com');
    window.open('https://panaxgames.com', '_blank', 'noopener,noreferrer');
  };

  const handleTitleClick = () => {
    trackBannerClick('header_title', 'https://avatar.panaxgames.com');
    window.open('https://avatar.panaxgames.com', '_blank', 'noopener,noreferrer');
  };

  const handleCreateClick = () => {
    trackButtonClick('create_my_own_header');
    onOpenModal();
  };

  return (
    <>
      <header className="header-fixed">
        <div className="header-content">
          <div className="logo-container">
            <img src="/Logo_Panax_Only.png" alt="Panax Avatar Hub Logo" className="logo-image" onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
            <span className="logo-text" onClick={handleTitleClick} style={{ cursor: 'pointer' }}>Avatar Hub</span>
          </div>
          <button className="create-btn" onClick={handleCreateClick}>
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
