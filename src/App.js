import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation} from "react-router-dom";
import NavbarComponent from "./components/common/NavbarComponent"; // Correct import path
import Home from "./components/pages/Home";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./components/common/Footer";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import { HelmetProvider } from "react-helmet-async";

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
