import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct hook import
import "./Navbar.css";
import logo from "../../../assests/exousia logo.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Correct hook usage

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAbout = () => {
    navigate("/about"); // Navigate to the About page
  };
 
  const handleServices = () => {
    navigate("/services"); // Navigate to the About page
  };

  const handleContactus = () => {
    navigate("/contactus"); // Navigate to the About page
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
        <li onClick={handleAbout}>About</li> {/* Updated click handler */}
        <li onClick={handleServices} >Services</li>
        <li onClick={handleContactus}>Contact us</li>
        <li>
          <button className="demoBtn">Get demo</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
