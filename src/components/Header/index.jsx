import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="topbar container">
        <div className="navigation">
          <button>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/work">work</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
