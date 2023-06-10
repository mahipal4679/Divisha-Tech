import React from 'react';
import './Header.css';
import logo from '../../Images/white-logo.png';
import loginIcon from '../../Images/login.png';

function Header() {
  return (
    <header className="header">
      <div className="left">
        <img src={logo} alt="logo" />
      </div>
      <div className="right">
        <nav className="nav">
          <a href="#" className="link">HOME</a>
          <a href="#" className="link">STARTUP</a>
          <a href="#" className="link">ABOUT US</a>
          <a href="#" className="link">INVESTOR</a>
        </nav>
        <div className="login">
          <img
            src={loginIcon}
            alt="login"
            className="login-icon"
          />
          <a href="#" className="login-link">LOG IN</a>
        </div>
        <button className="add-listing-btn">ADD LISTING</button>
      </div>
    </header>
  );
}

export default Header;
