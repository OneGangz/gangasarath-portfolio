import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-content">
        <a href="#" className="logo">GANGASARATH S</a>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
