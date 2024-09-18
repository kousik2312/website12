import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo-container">
        {/* Logo acting as a home button */}
        <HashLink smooth to="#top">
          <img src="/logo.jpg" alt="WaveCrestIT Logo" className="logo" />
        </HashLink>
      </div>
      <div className="company-name">
        <h1>WAVECRESTIT</h1>
      </div>
      <nav className="nav-links">
        <ul>
          <li><HashLink smooth to="#top">HOME</HashLink></li>
          <li><HashLink smooth to="#about">ABOUT US</HashLink></li>
          <li><HashLink smooth to="#services">SERVICES</HashLink></li>
          <li><HashLink smooth to="#contact">CONTACT US</HashLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;