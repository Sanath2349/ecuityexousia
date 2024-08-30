import React from 'react'
import '../../Homepage/Homepage.css'

export default function Footer() {
  return (
    
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo">
        <div className="footer-logo-container">
          {/* <Camera size={24} /> */}
          <span className="footer-logo-text"> Ecuity Exousia </span>
        </div>
      </div>
      
      <div className="footer-links">
        <div className="footer-section">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="/technology">Technology</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>LEGAL</h3>
          <ul>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>SOCIAL</h3>
          <ul>
            <li><a href="https://www.linkedin.com/company/volaso" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.facebook.com/volaso" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/volaso" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.twitter.com/volaso" target="_blank" rel="noopener noreferrer">X</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>CONTACT</h3>
          <ul className='add'>
            <li>ecuityexousia.in</li>
            <li>CELL: 8790819049 </li>
            <li>#402,4th Floor, Manjeera, Trinity, KPHB Phase-III,</li>
            <li>Kukatpally,Hyderabad,Telangana - 500072</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    
       
   
    
   
  )
}
