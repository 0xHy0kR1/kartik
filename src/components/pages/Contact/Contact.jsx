import React, { useState, useCallback } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet-async";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import glassPartitions from "../../../assets/videos/clip1.mp4";
import wallPanels from "../../../assets/videos/clip2.mp4";
import officeInteriors from "../../../assets/videos/clip3.mp4";
import livingRoomInteriors from "../../../assets/videos/clip4.mp4";
import bathroomInteriors from "../../../assets/videos/clip5.mp4";
import "./Contact.css";
import ScrollToTop from "react-scroll-to-top";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => setIsSubmitted(true))
      .catch((error) => console.error("Email sending failed:", error.text));
  }, []);

  return (
    <>
    <div className="contact-block">
      <Helmet>
        <title>Contact Kartik Interiors - Transform Your Space Today!</title>
        <meta
          name="description"
          content="Get in touch with Kartik Interiors for premium window blinds, wall panels, and modular interiors. Book a free consultation today!"
        />
        <meta
          name="keywords"
          content="Kartik Interiors, contact, interior design, window blinds, wall panels, modular interiors, home decor"
        />
        <meta name="author" content="Kartik Interiors" />
        
        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Contact Kartik Interiors - Transform Your Space Today!" />
        <meta
          property="og:description"
          content="Reach out to Kartik Interiors for the best home decor solutions. Free consultations available!"
        />
        <meta property="og:image" content="https://i.postimg.cc/kXHBLSm8/images.webp" />
        <meta property="og:url" content="https://kartikinteriors15.com/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Card for Social Sharing */}
        <meta name="twitter:title" content="Contact Kartik Interiors" />
        <meta name="twitter:description" content="Transform your interiors with premium designs. Contact us today!" />
        <meta name="twitter:image" content="https://i.postimg.cc/mDTD7NYx/twitter.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Video Carousel Section */}
      <Carousel className="h-100 carousel-section">
        <Carousel.Item className="carousel-item">
          <video className="d-block w-100" autoPlay loop muted>
            <source src={glassPartitions} type="video/mp4" />
          </video>
          <Carousel.Caption>
            <h3>Glass Partitions with a Modern Touch</h3>
            <p>Elegant glass solutions for offices and homes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <video className="d-block w-100" autoPlay loop muted>
            <source src={wallPanels} type="video/mp4" />
          </video>
          <Carousel.Caption>
            <h3>Stylish Wall Panels for Elegant Spaces</h3>
            <p>Enhance your interiors with modern and textured wall panels.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <video className="d-block w-100" autoPlay loop muted>
            <source src={officeInteriors} type="video/mp4" />
          </video>
          <Carousel.Caption>
            <h3>Premium Office Interiors for Productivity</h3>
            <p>Transform your workspace with sleek and functional designs.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <video className="d-block w-100" autoPlay loop muted>
            <source src={livingRoomInteriors} type="video/mp4" />
          </video>
          <Carousel.Caption>
            <h3>Elegant Living Room Interiors for Style & Comfort</h3>
            <p>Enhance your living space with modern and cozy interiors.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <video className="d-block w-100" autoPlay loop muted>
            <source src={bathroomInteriors} type="video/mp4" />
          </video>
          <Carousel.Caption>
            <h3>Luxurious Bathroom Interiors for Relaxation</h3>
            <p>Experience comfort and elegance with our premium bathroom designs.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Contact Section */}
      {/* Enquiry Form */}
      <div className="enquiry-map-section">
      <div
          className="enquiry-section"
          
        >
          {/* contact section */}
          <div className="contact-container">
          <h1>Contact Kartik Interiors</h1>
  <p>
  ✨ Transform Your Space with Unmatched Quality & Style! ✨. Book A Free Consultation
  </p>
  <div className="contact-details">
    <div className="contact-item">
      <FaMapMarkerAlt className="contact-icon" />
      <div>
        <strong>LIG-1252, Sector-8, Saddu, Raipur 492001</strong>
      </div>
    </div>
    <div className="contact-item">
      <FaMapMarkerAlt className="contact-icon" />
      <div>
        <strong>SA 17, 2nd Floor, Lake City Mall, Thane West - 400607</strong>
      </div>
    </div>
    <div className="contact-item">
      <FaClock className="contact-icon" />
      <div>
        <strong>All Weekdays ...... 9AM to 7PM</strong>
      </div>
    </div>
    <div className="contact-item">
      <FaPhoneAlt className="contact-icon" />
      <a className="contact-link" href="tel:+919424200676">+91 9424200676</a>
    </div>
    <div className="contact-item">
      <FaEnvelope className="contact-icon" />
      <a className="contact-link" href="mailto:sales@kartikinteriors15.com.com">sales@kartikinteriors15.com </a>
    </div>
  </div>
  <h3>Follow Us</h3>
  <div className="social-icons">
    <a className="contact-link" href="https://x.com/Kar1ikSales" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="social-icon" />
      {/* https://x.com/Kar1ikSales */}
    </a>
    <a className="contact-link" href="https://www.facebook.com/profile.php?id=61573224883339" target="_blank" rel="noopener noreferrer">
      <FaFacebook className="social-icon" />
    </a>
  </div>
</div>


          {/* Form section */}
          {!isSubmitted && (
            <div
            className="enquiry-form"
            style={{
              display: isSubmitted ? "none" : "block",
              padding: "20px",
              transition: "0.5s",
            }}
            >
            <form
              onSubmit={handleSubmit}
              style={{ maxWidth: "400px", margin: "auto" }}
            >
              <h3>Make an Enquiry</h3>
              <input
                type="text"
                name="from_name"
                placeholder="Name*"
                required
                style={{
                  display: "block",
                  width: "100%",
                  marginBottom: "10px",
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                style={{
                  display: "block",
                  width: "100%",
                  marginBottom: "10px",
                }}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                required
                style={{
                  display: "block",
                  width: "100%",
                  marginBottom: "10px",
                }}
              />
              <select
                name="service"
                required
                style={{
                  display: "block",
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                <option value="" disabled>
                  Select Required Service*
                </option>
                <option value="Window Blinds">Window Blinds</option>
                <option value="Zebra Blinds">Zebra Blinds</option>
                <option value="Roller Blinds">Roller Blinds</option>
                <option value="Windows & Frames">Windows & Frames</option>
                <option value="Wooden Blinds">Wooden Blinds</option>
                <option value="Venetian Blinds">Venetian Blinds</option>
                <option value="Printed Roller Blinds">
                  Printed Roller Blinds
                </option>
                <option value="Vertical Blinds">Vertical Blinds</option>
                <option value="Curtain Blinds">Curtain Blinds</option>
                <option value="Mosquito Blinds">Mosquito Blinds</option>
                <option value="Curtain Rods">Curtain Rods</option>
                <option value="Wallpaper Customized">
                  Wallpaper Customized
                </option>
                <option value="Wooden Flooring Wallpaper">
                  Wooden Flooring Wallpaper
                </option>
                <option value="WPC Louvers">WPC Louvers</option>
                <option value="PVC Wall Panel">PVC Wall Panel</option>
                <option value="Artificial Grass">Artificial Grass</option>
              </select>
              <textarea
                name="message"
                placeholder="Additional Message*"
                required
                style={{
                  display: "block",
                  width: "100%",
                  marginBottom: "10px",
                }}
              ></textarea>
              <button
                type="submit"
                className="submit"
              >
                Send Message
              </button>
            </form>
            </div>
          )}
      </div>
      
      </div>
       {/* Google Map Section */}
       <div className="map-container">
            <iframe
            title="Kartik Interiors Location Map"
              src="https://www.google.com/maps?q=21.283744,81.682269&output=embed"
              width="800"
              height="500"
              allowFullScreen
              loading="lazy"
            ></iframe>
        </div>
        
    </div>
    <ScrollToTop
    smooth
    viewBox="0 0 24 24"
    svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
  />
    </>
  );
};

export default ContactPage;
