import React from "react";
import "./Navbar.css"; // Assuming you'll create a Navbar.css for styles

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">Sharda</div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
