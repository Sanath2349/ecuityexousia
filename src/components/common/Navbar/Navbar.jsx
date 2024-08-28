import React from "react";
import "./Navbar.css";
import logo from "../../../assests/exousia logo.webp";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
      <img src={logo} alt="logo" className="navlogo" />
      <div
        className={`menu-icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navlinks ${isMenuOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact us</li>
        <li>
          <button className="demoBtn">Get demo</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
