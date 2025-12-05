import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="/logo.svg"
          alt="Logo"
          className="logo"
        />
      </div>
      <nav className="navigation">
        <Link to="/" className="nav-link">
          <span className="nav-full">Home</span>
          <span className="nav-short">H</span>
        </Link>
        <span className="nav-separator">|</span>
        <Link to="/blanko" className="nav-link">
          <span className="nav-full">Blanko</span>
          <span className="nav-short">B</span>
        </Link>
        <span className="nav-separator">|</span>
        <Link to="/slido" className="nav-link">
          <span className="nav-full">Slido</span>
          <span className="nav-short">S</span>
        </Link>
        <span className="nav-separator">|</span>
        <Link to="/tetro" className="nav-link">
          <span className="nav-full">Tetro</span>
          <span className="nav-short">T</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
