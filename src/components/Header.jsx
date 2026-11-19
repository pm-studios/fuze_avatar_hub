import './Header.css'
import { trackButtonClick, trackBannerClick } from '../utils/mixpanel'
import { t, LANG, LANGS, setLang } from '../i18n'

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
            <span className="logo-text" onClick={handleTitleClick} style={{ cursor: 'pointer' }}>{t('header.title')}</span>
          </div>
          <div className="header-actions">
            <select
              className="lang-select"
              value={LANG}
              aria-label={t('header.language')}
              onChange={(e) => setLang(e.target.value)}
            >
              {LANGS.map((l) => <option key={l.code} value={l.code}>{l.label}</option>)}
            </select>
            <button className="create-btn" onClick={handleCreateClick}>
              <span className="btn-text-full">{t('header.create')}</span>
              <span className="btn-text-short">{t('header.create_short')}</span>
            </button>
          </div>
        </div>
      </header>
      <div className="header-spacer"></div>
      <div className="header-banner">
        <span className="banner-text-main">{t('header.banner')}</span>
        <span className="banner-text-tip"><strong>{t('header.tip_label')}</strong> {t('header.tip')}</span>
      </div>
    </>
  )
}

export default Header
