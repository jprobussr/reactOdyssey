import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#" className="brand">
          <i className="fas fa-code" aria-hidden="true"></i>
          UI Design Mind
        </a>

        <nav aria-label="Primary">
          <ul className="nav-links">
            <li>
              <a className="nav-link is-active" href="#">Home</a>
            </li>
             <li>
              <a className="nav-link is-active" href="#">About</a>
            </li>
             <li>
              <a className="nav-link is-active" href="#">Portfolio</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
