import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact-us">
      <div className="footer-head">
        <div className="footer-content">
          <div className="footer-contact">
            <h4>Contact Information</h4>
            <p>
              <FontAwesomeIcon icon={faPhone} className="icon" /> +91 9856996996
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="icon" /> +91 9011996996
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />{' '}
              <a href="mailto:shivrajtravels6996@gmail.com">
                shivrajtravels6996@gmail.com
              </a>
            </p>
          </div>
          <div className="footer-location">
            <h4>Contact Address</h4>
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="icon" /> Shivraj
              Travels
            </p>
            <p>
              205, Raghvendra Nagar, Om Garjana Chowk, Saiful, Solapur
            </p>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div>
              <a
                href="https://www.facebook.com/share/12E13tzVJAc/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faFacebook} className="icon" />
              </a>
              <a
                href="https://www.instagram.com/shivraj_travel_sola_9856996996/profilecard/?igsh=bzE4YjI1emRpNjRx"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a>
              <a href="https://wa.me/919011996996" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>
        <div className="map-container">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3802.8069657326464!2d75.93162!3d17.611899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDM2JzQyLjgiTiA3NcKwNTUnNTMuOCJF!5e0!3m2!1sen!2sin!4v1734210183645!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
      </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2017 Shivraj Tours & Travels, Solapur. | Developed by&nbsp;
          <a
            href="https://vishwalatarati.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vishwalatarati Digital Solutions Pvt Ltd, Solapur
          </a>
          &nbsp;| All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
