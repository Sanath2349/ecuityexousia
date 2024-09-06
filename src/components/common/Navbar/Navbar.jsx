import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct hook import
import "./Navbar.css";
import logo from "../../../assests/logoo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Correct hook usage

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHome = () => {
    navigate("/");
    toggleMenu();
    setIsMenuOpen(false)
  };

  const handleAbout = () => {
    navigate("/about");
    toggleMenu();
    setIsMenuOpen(false)

    // Navigate to the About page
  };

  const handleServices = () => {
    navigate("/services"); 
    setIsMenuOpen(false)

  };

  const handleGallery = ()=>{
    navigate("/gallery")
    setIsMenuOpen(false)
  }

  const handleContactus = () => {
    navigate("/contactus");
    setIsMenuOpen(false)


    toggleMenu(); // Navigate to the About page
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
          whileHover={{ scale: 1.5 }}
          onClick={handleHome}
        >
          Home
        </motion.li>
        <motion.li
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 1.5 }}
          onClick={handleAbout}
        >
          About
        </motion.li>{" "}
        {/* Updated click handler */}
        <motion.li
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 1.5 }}
          onClick={handleServices}
        >
          Services
        </motion.li>
        <motion.li
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 1.5 }}
          onClick={handleServices}
        >
          Careers
        </motion.li>
        <motion.li
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 1.5 }}
          onClick={handleGallery}
        >
          Gallery
        </motion.li>
        <motion.li
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 1.5 }}
          onClick={handleContactus}
        >
          <button className="demoBtn">Contact us</button>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navbar;
