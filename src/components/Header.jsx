import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Fuze Avatar Hub</h1>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
