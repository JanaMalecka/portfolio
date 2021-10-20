import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header__fixed">
        <div className="header__container">
          <div className="header__logo">
            <Link to="/">jana malecka</Link>
          </div>
          <div className="header__hamburger">
            <button className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <nav className="header__navigation">
            <Link to="/work">work</Link>
            <Link to="/about">about</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
