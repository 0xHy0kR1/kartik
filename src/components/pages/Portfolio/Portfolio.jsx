import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.css"; // Add necessary styles here
import slide1 from "../../../assets/images/slide1.webp";
import slide2 from "../../../assets/images/slide2.webp";
import slide3 from "../../../assets/images/slide3.webp";
import slide4 from "../../../assets/images/slide4.webp";
import slide5 from "../../../assets/images/slide5.webp";
import slide6 from "../../../assets/images/slide6.webp";
import slide7 from "../../../assets/images/slide7.webp";
import workSample from "../../../assets/images/work-sample.webp";
import { Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ScrollToTop from "react-scroll-to-top";
import ogImage from "../../../assets/images/ogPortfolio.webp"

// Project Data
const commercialProjects = [
  {
    id: 1,
    title: "M/s S Mart Unit of Khemani Brother’s",
    description:
      "Showroom No. 6, Udayraj CHS. Ltd., Agra Road, Kalyan West (1500 Sq.ft showroom).",
    image: require("../../../assets/images/project1.webp"),
  },
  {
    id: 2,
    title: "M/s. Inventia Healthcare Limited",
    description: "Thane West (Approx 2000 Sq.ft Interior & Exterior work)",
    image: require("../../../assets/images/project2.webp"),
  },
  {
    id: 3,
    title: "M/s. India Bulls Realty Developers Ltd.",
    description: "Elphinstone Road, Mumbai (1200 Sq.ft Washroom).",
    image: require("../../../assets/images/project3.webp"),
  },
  {
    id: 4,
    title: "M/s. Tridev II Co-Op Hsg. Soc.Ltd.",
    description: "Bhakti Marg, Mulund West. (650 Sq.ft Interior & Exteriors Work)",
    image: require("../../../assets/images/project4.webp"),
  },
  {
    id: 5,
    title: "M/s. Bharat Electronics Ltd.",
    description: "MIDC INDL Area, Taloja, Navi Mumbai.",
    image: require("../../../assets/images/project5.webp"),
  },
  {
    id: 6,
    title: "M/s. Indian Rubber Manufacturers Research Association (IRMRA)",
    description: "Plot No. 254/1B, Road No. 16V, Wagle Indl. Estate, Thane west.",
    image: require("../../../assets/images/project6.webp"),
  },
  {
    id: 7,
    title: "M/s. Padmavati Builder's and Infra",
    description: "Thane west.",
    image: require("../../../assets/images/project7.webp"),
  },
  {
    id: 8,
    title: "M/s. AVD Infra Group",
    description: "Borivali West, Mumbai",
    image: require("../../../assets/images/project8.webp"),
  },
];

const residentialProjects = [
  {
    id: 1,
    title: "Mr. Rajendra Jalan",
    description: "Tarangan Tower - II",
    image: require("../../../assets/images/project9.webp"),
  },
  {
    id: 2,
    title: "Mr. Prabhat Singh, IRIS, Lodha",
    description: "Thane West",
    image: require("../../../assets/images/project10.webp"),
  },
  {
    id: 3,
    title: "Mr. Wahid Ansari, Amara, Lodha",
    description: "Thane West",
    image: require("../../../assets/images/project11.webp"),
  },
];

// Animation Variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


const Portfolio = () => {
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowProjectDetails((prev) => !prev);
    }, 6000); // Toggle every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Helmet>
      <title>Portfolio | Kartik Interiors - Commercial & Residential Projects</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Explore our commercial and residential interior design projects. Kartik Interiors brings luxury and elegance to your space." />
      <meta name="keywords" content="Kartik Interiors, interior design, modular interiors, residential interiors, commercial interiors, home decor" />
      <meta name="author" content="Kartik Interiors" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph (Facebook & LinkedIn) */}
      <meta property="og:title" content="Portfolio | Kartik Interiors - Our Best Projects" />
      <meta property="og:description" content="Explore our stunning commercial and residential interior designs." />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content="https://kartikinteriors15.com/portfolio" />
      <meta property="og:type" content="website" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:title" content="Portfolio | Kartik Interiors - Our Best Projects" />
      <meta name="twitter:description" content="Explore our stunning commercial and residential interior designs." />
      <meta name="twitter:image" content="https://cdn.kartikinteriors15.com/portfolio-banner.webp" />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://kartikinteriors15.com/portfolio" />
      {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Kartik Interiors",
            "url": "https://kartikinteriors15.com/portfolio",
            "image": "https://cdn.kartikinteriors15.com/portfolio-banner.webp",
            "description": "Kartik Interiors specializes in commercial and residential interior design projects with luxury and elegance.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chhattisgarh",
              "addressCountry": "India"
            }
          })}
        </script>
    </Helmet>
    <section className="portfolio-container">
{/* Carousel Section */}
<Carousel className="h-100 carousel-section">
  <Carousel.Item className="carousel-item">
    <img className="d-block w-100 carousel-images" src={slide1} alt="First slide" />
    <Carousel.Caption>
      <h3>Transform Your Windows</h3>
      <p>Stylish blinds that redefine elegance and functionality.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item className="carousel-item">
    <img className="d-block w-100 carousel-images" src={slide2} alt="Second slide" />
    <Carousel.Caption>
      <h3>Dream Kitchens, Designed for You</h3>
      <p>Modern modular kitchens that blend beauty with efficiency.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item className="carousel-item">
    <img className="d-block w-100 carousel-images" src={slide3} alt="Third slide" />
    <Carousel.Caption>
      <h3>Elevate Your Ceilings</h3>
      <p>Modular false ceilings that add charm and personality to your space.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item className="carousel-item">
    <img className="d-block w-100 carousel-images" src={slide4} alt="Fourth slide" />
    <Carousel.Caption>
      <h3>Wall Panels That Impress</h3>
      <p>Upgrade your walls with premium textures and designs.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item className="carousel-item">
    <img className="d-block w-100 carousel-images" src={slide5} alt="Fifth slide" />
    <Carousel.Caption>
      <h3>Stylish Wardrobes, Smart Storage</h3>
      <p>Custom-built wardrobes for an organized and stylish home.</p>
    </Carousel.Caption>
  </Carousel.Item>

  {/* New Slides */}
  <Carousel.Item className="carousel-item">
    <img className="d-block w-100 carousel-images" src={slide6} alt="Sixth slide" />
    <Carousel.Caption>
      <h3>Glass Partitions with a Modern Touch</h3>
      <p>Elegant glass solutions for offices and homes.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item className="carousel-item">
    <img className="d-block w-100 carousel-images" src={slide7} alt="Seventh slide" />
    <Carousel.Caption>
      <h3>Flooring That Defines Luxury</h3>
      <p>Premium flooring solutions for a sophisticated look.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      <hr className="section-divider" />
      {/* Middle Section */}
      <section className="middle-section">
      <div className="text-content">
      <h2>🏡 Elevate Your Space! ✨</h2>
  <h3>Where Style Meets Comfort – Designed Just for You! 🎨</h3>
  <p>
    At <strong>Kartik Interiors</strong>, we craft more than just window blinds—we create experiences that redefine luxury and comfort. 🌟  
    Whether you desire sleek modern designs or classic sophistication, our expert team brings your vision to life with precision and passion. 💫  
    <br />
    <strong>Let’s curate a space that truly reflects YOU!</strong> ✨ Consult with us today and elevate your interiors with unmatched elegance. 🚀🏡
  </p>
</div>

        <div className="middle-image">
          <img src={workSample} alt="Work_Sample"  className="work-sample-image"/>
        </div>
      </section>
      <hr className="section-divider" />
      
      {/* Details of Projects Section */}
      <section className="project-section">
        {/* Commercial Projects */}
      <div className="details-section">
        <h2 className="section-heading">Commercial Projects</h2>
        <Row className="project-row">
          {commercialProjects.map((project) => (
            <Col md={4} key={project.id} className="project-card-container">
              <Card className="project-card">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <motion.p
                    className="project-description"
                    variants={fadeInVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      {/* Residential Projects */}
      <div className="details-section">
        <h2 className="section-heading">Residential Projects</h2>
        <Row className="project-row">
          {residentialProjects.map((project) => (
            <Col md={4} key={project.id} className="project-card-container">
              <Card className="project-card">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  variants={fadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <motion.p
                    className="project-description"
                    variants={fadeInVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      </section>
      
    </section>
    <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
      />
    </>
  );
};

export default Portfolio;
