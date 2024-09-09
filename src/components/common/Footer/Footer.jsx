import React from "react";
import "../../Homepage/Homepage.css";
import logo from "../../../assests/ECUITYEXOUSIAL LOGO LANDSCAPE black .png";
import { useNavigate, useNavigation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="footer-logo-container">
            {/* <Camera size={24} /> */}
            <img src={logo} alt="" />
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h3>COMPANY</h3>
            <ul>
              <li>
                <a onClick={() => navigate("/services")}>Services</a>
              </li>
              <li>
                <a onClick={() => navigate("/about")}>About</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>LEGAL</h3>
            <ul>
              <li>
                <a onClick={() => navigate("/terms")}>Terms & Conditions</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>SOCIAL</h3>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/ecuity-exousia-it-and-ites-private-limited-61740a327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/EcuityExousia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>CONTACT</h3>
            <ul className="add">
              <li>ecuityexousia.in</li>
              <li>CELL: 8790819049 </li>
              <li>#402,4th Floor, Manjeera, Trinity, KPHB Phase-III,</li>
              <li>Kukatpally,Hyderabad,Telangana - 500072</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
