import { React, useState, useEffect, lazy, Suspense } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import home_top_right from "./../../../assets/images/home-top-right.webp";
import home_about_right from "./../../../assets/images/home-about.webp";
import "./Home.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { withSize } from "react-sizeme";
import { Helmet } from "react-helmet-async";
import Spinner from "../../common/Spinner";
import ScrollToTop from "react-scroll-to-top";
import FloatingWhatsAppButton from "../../common/FloatingWhatsAppButton";
// Lazy load components
const VideoModal = lazy(() => import("../../modal/VideoModal"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

// Dynamically import all images from the assets folder
const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => (images[item.replace("./", "")] = r(item)));
  return images;
};



// Import all images from the assets folder
const images = importAll(
  require.context("./../../../assets/images", false, /\.(png|jpe?g|svg|webp)$/)
);


const services = [
  "window-blinds",
  "modular-kitchen",
  "modular-false-ceiling",
  "wall-panels",
  "wardrobes",
  "glass-partitions",
  "flooring",
  "wallpapers",
  "mosquito-net",
  "bathroom-interiors",
  "office-interiors",
  "bedroom-interiors",
  "living-room",
  "outdoor-shades",
].map((title) => ({
  title: title.replace(/-/g, " ").replace(/^./, (str) => str.toUpperCase()),
  video: `${title}.mp4`,
}));



const Home = () => {
  // Check if the user is logged in (based on the presence of authToken)

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 1 },
    },
    exit: {
      y: "100vh",
      transition: { ease: "easeInOut" },
    },
  };

  

  // Our Services stuff
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState(""); // Store video title

  const openVideo = async (video, title) => {
    const videoModule = await import(`../../../assets/videos/${video}`);
    setSelectedVideo(videoModule.default);
    setSelectedVideoTitle(title); // Set the title of the selected video
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setSelectedVideoTitle(""); // Reset title when modal closes
  };

  const [fontSize, setFontSize] = useState(window.innerWidth <= 768 ? "1.6em" : "2em");

useEffect(() => {
  const handleResize = () => {
    setFontSize(window.innerWidth <= 768 ? "1.3em" : "2em");
  };
  
  window.addEventListener("resize", handleResize);
  
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  return (
    <>
    <Helmet>
      {/* Basic Metadata */}
      <title>Kartik Interiors | Home - Luxury Interior Design</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Kartik Interiors offers premium modular interiors, false ceilings, wall panels, and home decor. Transform your home with elegance and style." />
      <meta name="keywords" content="Kartik Interiors, modular interiors, false ceiling, wall panels, home decor, luxury interior design, home renovation" />
      <meta name="author" content="Kartik Interiors" />
      <meta name="robots" content="index, follow" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.webp" />

      {/* Open Graph (Facebook & LinkedIn) */}
      <meta property="og:title" content="Kartik Interiors | Transform Your Home" />
      <meta property="og:description" content="We provide stunning modular interiors for your home & office." />
      <meta property="og:image" content="https://i.postimg.cc/T38TrJxk/linkedin.webp" />
      <meta property="og:url" content="https://kartikinteriors15.com/" />
      <meta property="og:type" content="website" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:title" content="Kartik Interiors | Transform Your Home" />
      <meta name="twitter:description" content="We provide stunning modular interiors for your home & office." />
      <meta name="twitter:image" content="https://i.postimg.cc/mDTD7NYx/twitter.webp" />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://kartikinteriors15.com/" />
    </Helmet>

    <motion.div
    animate={{ y: [0, -30, 0] }}
  transition={{
    repeat: Infinity,
    duration: 1,
    type: "spring",
    stiffness: 100,
    damping: 20,
    debug: true,  // Enable debugging to see logs
  }}
    >
      <Container fluid>
        <section className="top-box">
          <Col className="mx-2 top-left-text">
            <TypeAnimation
              sequence={[
                "Welcome to Kartik Interiors ✨",
                1000,
                "Where Design Meets Elegance 🏡",
                1000,
                "Crafting Spaces, Creating Experiences 🎨",
                1000,
                "Luxury Interiors, Tailored for You ✨",
                1000,
                "Turn Your Dream Home Into Reality 💫",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: fontSize,
                display: "inline-block",
                fontWeight: "bold",
              }}
              repeat={Infinity}
            />

            <p>
              ✨ Elevate your living space with{" "}
              <strong>Kartik Interiors</strong>! 🏡 Where{" "}
              <strong>elegance</strong> meets <strong>comfort</strong>, and
              every detail speaks <strong>luxury</strong>. 💫 Let's design your
              dream home today! 🎨✨
            </p>
          </Col>
          <Col>
            <img
              src={home_top_right}
              alt="Luxury Modular Interiors by Kartik Interiors"
              className="home-top-img"
              loading="lazy"
            />
          </Col>
        </section>
          {/* About Us Section */}
          <hr className="section-divider" />
          <Row className="about-us-section">
            <Col md={6} className="about-text">
              <h2>About Us</h2>
              <p className="about-tagline">
                Our passion is to provide clients a superior quality Window
                Blinds. 🏡✨
              </p>
              <p>
                At <strong>Kartik Interiors</strong>, we specialize in crafting
                elegant and functional spaces that reflect your personality. Our
                expert designers work closely with clients to bring their dream
                homes to life with premium quality and modern aesthetics.
                Whether you seek contemporary charm or timeless elegance, we are
                here to transform your vision into reality. Let’s create
                something amazing together! 🎨💫
              </p>
            </Col>
            <Col md={6} className="about-image">
              <img
                src={home_about_right}
                alt="About Us"
                className="about-img"
                loading="lazy"
              />
            </Col>
          </Row>
          {/* About section end */}
          <hr className="section-divider" />

          {/* Our Services section start */}
          <Row className="our-services-section">
            <Col>
              <h2 className="Our-services-heading">Our Services</h2>
            </Col>
            <Row className="card-section">
              {services.map((service, index) => {
                const imageName = `${service.title
                  .toLowerCase()
                  .replace(/ /g, "-")}.webp`;
                const imageSrc = images[imageName] || images["default.webp"];
                return (
                  <Col key={index} md={4} className="card-box">
                    <Card
                      className="card"
                      onClick={() => openVideo(service.video, service.title)}
                    >
                      <Card.Img
                        className="card-img-container"
                        variant="top"
                        src={imageSrc}
                        alt={service.title}
                        loading="lazy"
                      />
                      <Card.Body>
                        <Card.Title>{service.title}</Card.Title>
                        <Button
                          variant="primary"
                          onClick={() =>
                            openVideo(service.video, service.title)
                          }
                        >
                          View Sample
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Row>
          {/* Our Services Section end  */}
          <hr className="section-divider" />
        {/* What our customer say? */}
        {/* Testimonial */}
        <Row className="testimonial-section">
          <Col>
            <h2 className="testimonial-h2">What Our Customers Say?</h2>
          </Col>
          <Suspense fallback={<Spinner/>}>
            <Reviews />
          </Suspense>
        </Row>
      </Container>
      <FloatingWhatsAppButton />
      <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
      />
      <Suspense fallback={<Spinner/>}>
        <VideoModal
          show={!!selectedVideo}
          handleClose={closeVideo}
          videoSrc={selectedVideo}
          videoTitle={selectedVideoTitle} // Pass the title to modal
        />
      </Suspense>
    </motion.div>
    </>
  );
};

const ReviewsWithSize = withSize()(Reviews);

export default Home;
