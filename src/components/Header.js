import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHome, faBars, faComment } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Header.css";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="header-container" id="home">
      <div className="top-bar">
        <div className="top-links">
          <a href="#enquiry" className="mobView">Enquiry Now</a>
          <span className="mobView">|</span> 
          <a href="#domestic">Domestic</a>
          <span>|</span>
          <a href="#cars" className="mobView">Cab</a>
          <span className="mobView">|</span>
          <a href="#pilgrim">Pilgrim</a>
          <span>|</span>
          <span><FontAwesomeIcon icon={faPhone} className="icon" /> +919011996996</span>
        </div>
        <div className="top-contact">
          <a href="https://www.facebook.com/share/12E13tzVJAc/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <span>|</span>
          <a href="https://www.instagram.com/shivraj_travel_sola_9856996996/profilecard/?igsh=bzE4YjI1emRpNjRx" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <span>|</span>
          <span><FontAwesomeIcon icon={faPhone} className="icon" /> +919856996996</span>
        </div>
      </div>
      <div className="heads">
        <div className="main-header blink">
          <h1>Shivraj Car Rental Solapur</h1>
          <p>Solapur Car rental / Car Hire / Cab service Solapur / Tempo Traveller Service</p>
        </div>
        <nav className="nav-bar">
          <a href="#home" className="nav-item nav-selected">
            <FontAwesomeIcon icon={faHome} className="icon" />
          </a>
          <a href="#services" className="nav-item">Services</a>
          <a href="#tour-package" className="nav-item">Tour Package</a>
          <a href="#cars" className="nav-item">Available Cars</a>
          <a href="#about-us" className="nav-item">About Us</a>
          <a href="#contact-us" className="nav-item">Contact Us</a>
        </nav>
      </div>
      <div className="sticky-bottom-bar">
        <a href="tel:+919011996996" className="sticky-icon">
          <FontAwesomeIcon icon={faPhone} />
        </a>
        <a href="https://wa.me/919011996996" className="sticky-icon">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="sms:+919011996996" className="sticky-icon">
          <FontAwesomeIcon icon={faComment} />
        </a>
        <button onClick={toggleNav} className="sticky-icon menu-button">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {showNav && (
        <nav className="popover-nav">
          <a href="#home" className="nav-item">Home</a>
          <a href="#services" className="nav-item">Services</a>
          <a href="#tour-package" className="nav-item">Tour Package</a>
          <a href="#cars" className="nav-item">Available Cars</a>
          <a href="#about-us" className="nav-item">About Us</a>
          <a href="#contact-us" className="nav-item">Contact Us</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
