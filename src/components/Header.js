import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content container">
        <div className="logo">Torrens Conscientium</div>
        <nav className="navbar">
          <NavLink to="/home" className="navbar-item">
            Home
          </NavLink>
          <NavLink to="/music" className="navbar-item">
            Music
          </NavLink>
          <NavLink to="/gallery" className="navbar-item">
            Gallery
          </NavLink>
          <NavLink to="/shop" className="navbar-item">
            Shop
          </NavLink>
          <NavLink to="/contacts" className="navbar-item">
            Contacts
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
