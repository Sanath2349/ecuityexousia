import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct hook import
import "./Navbar.css";
import logo from "../../../assests/exousia logo.webp";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Correct hook usage

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHome = () => {
    navigate("/");
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
        <motion.li
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 1.2 }}
          onClick={handleHome}
        >
          Home
        </motion.li>
        <motion.li
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 1.2 }}
          onClick={handleAbout}
        >
          About
        </motion.li>{" "}
        {/* Updated click handler */}
        <motion.li
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 1.2 }}
          onClick={handleServices}
        >
          Services
        </motion.li>
        <motion.li
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 1.2 }}
          onClick={handleContactus}
          className="demoBtn"
        >
          Contact us
        </motion.li>
        {/* <li>
          <button className="demoBtn">Get demo</button>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
