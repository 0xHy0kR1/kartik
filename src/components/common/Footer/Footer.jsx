import React from "react";
import { Helmet } from "react-helmet-async";  // Import Helmet
import "./Footer.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import FloatingWhatsAppButton from "../FloatingWhatsAppButton"

const Footer = () => {
  return (
    <footer className="footer">
      {/* SEO Optimization */}
      <Helmet>
        <meta name="description" content="Reach out to Kartik Interiors. Call, email, or visit our locations in Raipur & Thane. Follow us on social media for design inspirations." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="footer-container">
        <div className="footer-section footer-contact">
          <h3 className="footer-heading">Contact Us</h3>
          <p>
            <FaMapMarkerAlt /> LIG-1252, Sector-8, Saddu, Raipur 492001
          </p>
          <p>
            <FaMapMarkerAlt /> SA 17, 2nd Floor, Lake City Mall, Thane West - 400607
          </p>
          <p>
            <FaPhone /> <a className="footer-contact-link" href="tel:+919424200676" aria-label="Call Kartik Interiors">9424200676</a>
          </p>
          <p>
            <FaEnvelope /> <a className="footer-contact-link" href="mailto: sales@kartikinteriors15.com" aria-label="Email Kartik Interiors">sales@kartikinteriors15.com</a>
          </p>
        </div>
        <div className="footer-section footer-social">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-social-links">
            <a href="https://www.facebook.com/profile.php?id=61573224883339" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/interiorskartik/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Kartik Interiors. All rights reserved.
        </div>
        <div className="footer-whatsapp-floating">
          <FloatingWhatsAppButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
