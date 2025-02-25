import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarComponent.css";
import DarkMode from "../DarkMode/DarkMode";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

function NavbarComponent(props) {
  // State to manage modal visibility
  const [isToggled, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);


  // Function to show the modal
  const handleModalShow = () => setShowModal(true);

  // Function to hide the modal
  const handleModalClose = () => setShowModal(false);


  const closeBurgerMenu = () => {
    setToggle(false);
    // If you want to notify the parent component about burger menu close,
    // you can call props.closeBurgerMenu here
    props.closeBurgerMenu();
    // You can pass additional information if needed, for example:
    // props.closeBurgerMenu('Burger menu closed');
  };

  const toggleBurgerButton = () => {
    setToggle(!isToggled);
    props.handleBurgerClick();
  };


  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      scale: 1, 
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  const navContainer = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <>
    <Helmet>
        <meta name="description" content="Navigate through Kartik Interiors for premium interior design solutions. Explore our portfolio and contact us today." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <button
      aria-label="Toggle Navigation Menu"
        variant="primary"
        className={`btn-primary burger-button ${
          isToggled ? "black-bg" : "white-bg"
        }`}
        onClick={toggleBurgerButton}
      >
        =
      </button>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            className="nav-block"
            variants={navContainer}
            initial="hidden"
            animate={isToggled ? "visible" : "hidden"}
            exit="hidden"
          >
            <Navbar className={`nav-cover`} data-bs-theme="dark">
              <Container fluid>
                {/* Mobile menu toggle button */}
                <motion.div
                  variants={navList}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <div className={`me-auto`}>
                    {/* Apply motion to each Link directly */}
                    <motion.div className="block-link" variants={navItem}>
                      <Link
                        to="/"
                        className="nav-link"
                        onClick={closeBurgerMenu}
                      >
                        Home
                      </Link>
                    </motion.div>
                    <motion.div className="block-link" variants={navItem}>
                      <Link
                        to="/portfolio"
                        className="nav-link"
                        onClick={closeBurgerMenu}
                      >
                        Portfolio
                      </Link>
                    </motion.div>
                    <motion.div className="block-link" variants={navItem}>
                      <Link
                        to="/contact"
                        className="nav-link"
                        onClick={closeBurgerMenu}
                      >
                        Contact
                      </Link>
                    </motion.div>
                    <motion.div className="block-link" variants={navItem}>
                      <Link
                        to="/about"
                        className="nav-link"
                        onClick={closeBurgerMenu}
                      >
                        About Us
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </Container>
            </Navbar>
          </motion.div>
        )}
      </AnimatePresence>
      {/* DarkMode component */}
      <div className="right-block">
        <div className="button-block">
        <Button variant="danger" className="call-now-button" onClick={() => window.location.href = "tel:+919876543210"}>
            Call Now
          </Button>
        </div>
          <DarkMode />
      </div>
    </>
  );
}

export default NavbarComponent;
