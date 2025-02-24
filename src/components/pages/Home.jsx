import { React, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import home_top_right from "./../../assets/images/home-top-right.webp";
import home_about_right from "./../../assets/images/home-about.webp";
import "./Home.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import VideoModal from "../modal/VideoModal"; // Import the VideoModal component
import Reviews from "./Reviews/Reviews";
import { withSize } from "react-sizeme";
import { Helmet } from "react-helmet-async";

// Dynamically import all images from the assets folder
const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => (images[item.replace("./", "")] = r(item)));
  return images;
};



// Import all images from the assets folder
const images = importAll(
  require.context("./../../assets/images", false, /\.(png|jpe?g|svg|webp)$/)
);

const serviceVideos = {
  windowBlinds: require("../../assets/videos/window-blinds.mp4"),
  modularKitchen: require("../../assets/videos/modular-kitchen.mp4"),
  modularFalseCeiling: require("../../assets/videos/modular-false-ceiling.mp4"),
  wallPanels: require("../../assets/videos/wall-panels.mp4"),
  wardrobes: require("../../assets/videos/wardrobes.mp4"),
  glassPartitions: require("../../assets/videos/glass-partitions.mp4"),
  flooring: require("../../assets/videos/flooring.mp4"),
  wallpapers: require("../../assets/videos/wallpapers.mp4"),
  mosquitoNet: require("../../assets/videos/mosquito-net.mp4"),
  bathroomInteriors: require("../../assets/videos/bathroom-interiors.mp4"),
  officeInteriors: require("../../assets/videos/office-interiors.mp4"),
  bedroomInteriors: require("../../assets/videos/bedroom-interiors.mp4"),
  livingRoom: require("../../assets/videos/living-room.mp4"),
  outdoorShades: require("../../assets/videos/outdoor-shades.mp4"),
};

const services = Object.keys(serviceVideos).map((key) => ({
  title: key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase()),
  video: serviceVideos[key],
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

  const openVideo = (video, title) => {
    setSelectedVideo(video);
    setSelectedVideoTitle(title); // Set the title of the selected video
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setSelectedVideoTitle(""); // Reset title when modal closes
  };
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
      <meta property="og:image" content="https://cdn.kartikinteriors15.com/home-top-right.webp" />
      <meta property="og:url" content="https://kartikinteriors15.com/" />
      <meta property="og:type" content="website" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:title" content="Kartik Interiors | Transform Your Home" />
      <meta name="twitter:description" content="We provide stunning modular interiors for your home & office." />
      <meta name="twitter:image" content="https://cdn.kartikinteriors15.com/home-top-right.webp" />
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
        <Row className="top-box">
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
              style={{ fontSize: "2em", display: "inline-block" }}
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
            />
          </Col>
        </Row>
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
            <Col md={6} className="about-img">
              <images
                src={home_about_right}
                alt="About Us"
                className="about-img"
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
                        className="card-images-container"
                        variant="top"
                        src={imageSrc}
                        alt={service.title}
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
          <Reviews />
        </Row>
      </Container>
      <VideoModal
        show={!!selectedVideo}
        handleClose={closeVideo}
        videoSrc={selectedVideo}
        videoTitle={selectedVideoTitle} // Pass the title to modal
      />
    </motion.div>
    </>
  );
};

const ReviewsWithSize = withSize()(Reviews);

export default Home;
