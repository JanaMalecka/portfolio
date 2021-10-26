import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header>
      <div className="header__fixed">
        <div className="header__logo">
          <Link to="/">jana malecka</Link>
        </div>
        <div className="header__container">
          <div className="header__hamburger">
            <button
              onClick={() =>
                menuOpen ? setMenuOpen(false) : setMenuOpen(true)
              }
              className={menuOpen ? 'hamburger hamburger--open' : 'hamburger'}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <nav
            className={
              menuOpen ? 'header__navigation' : 'header__navigation--open'
            }
          >
            <Link onClick={handleClose} className="navigation__link" to="/work">
              work
            </Link>
            <Link
              onClick={handleClose}
              className="navigation__link"
              to="/about"
            >
              about
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
