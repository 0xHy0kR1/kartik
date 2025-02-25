import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation} from "react-router-dom";
import NavbarComponent from "./components/common/Navbar/NavbarComponent"; // Correct import path
import Home from "./components/pages/Home/Home";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./components/common/Footer/Footer";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Contact from "./components/pages/Contact/Contact";
import { HelmetProvider, Helmet } from "react-helmet-async";

function App() {
  const [burgerClicked, setBurgerClicked] = useState(false);

  const location = useLocation();
  const handleBurgerClick = () => {
    setBurgerClicked(!burgerClicked);
  };

  const closeBurgerMenu = () => {
    setBurgerClicked(false);
  };


  return (
    <HelmetProvider>
    <Helmet>
      <meta
        name="description"
        content="Kartik Interiors specializes in modern home and office interiors. Explore our portfolio and transform your space today!"
      />
      <meta
        name="keywords"
        content="interior design, home decor, modular interiors, window blinds, wall panels, Kartik Interiors"
      />
      <meta name="author" content="Kartik Interiors" />

      {/* Open Graph for Social Media */}
      <meta property="og:title" content="Kartik Interiors | Home & Office Design Experts" />
      <meta
        property="og:description"
        content="Premium interior design services for homes and offices. Book a free consultation today!"
      />
      <meta property="og:image" content="https://yourwebsite.com/path-to-image.jpg" />
      <meta property="og:url" content="https://yourwebsite.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Card for Social Sharing */}
      <meta name="twitter:title" content="Kartik Interiors | Home & Office Design Experts" />
      <meta name="twitter:description" content="Transform your interiors with premium designs. Contact us today!" />
      <meta name="twitter:image" content="https://yourwebsite.com/path-to-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>

      <motion.div
      initial={{ opacity: 0, y: "-100vh" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100vh" }}
      transition={{
        delay: 0.3,
        duration: 2,
        type: 'spring',
        damping: 10,   
        stiffness: 100 
      }}
        >
            <NavbarComponent
              burgerClicked={burgerClicked}
              closeBurgerMenu={closeBurgerMenu}
              handleBurgerClick={handleBurgerClick}
            />
          {!burgerClicked && (
            <>
              {/* <Alert alert={alert} /> */}
              <ToastContainer position="top-right" autoClose={2000} />
                <AnimatePresence >
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                </AnimatePresence>
            </>

          )}
          <Footer />
        </motion.div>  
      </HelmetProvider>    
  );
}

export default App;
