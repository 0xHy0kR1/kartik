"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, Box, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";
import { motion } from "framer-motion";
import about_img from "../../../assets/images/about_page.webp"
// Animated Counter Component
import { Container} from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import glassPartitions from "../../../assets/videos/clip1.mp4";
import wallPanels from "../../../assets/videos/clip2.mp4";
import officeInteriors from "../../../assets/videos/clip3.mp4";
import livingRoomInteriors from "../../../assets/videos/clip4.mp4";
import bathroomInteriors from "../../../assets/videos/clip5.mp4";
import { Carousel } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import ogAbout from "../../../assets/images/ogAbout.webp"
const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;
    
    let incrementTime = 20; // Speed of animation
    let step = Math.ceil(end / 100); // Increment step
    let timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <Typography variant="h3" fontWeight="bold">{count.toLocaleString()}+</Typography>;
};
const items = [
  { label: "Satisfied Clients", value: 150 },
  { label: "Years of Experience", value: 10 },
  { label: "Completed Projects", value: 1000 },
];


export default function About() {
  return (
    <>
    <Helmet>
        <title>About Kartik Interiors - Best Interior Design & Window Blinds</title>
        <meta name="description" content="Learn more about Kartik Interiors - your trusted partner for high-quality interior design and window blinds. Over 10 years of expertise in transforming spaces!" />
        <meta name="keywords" content="Interior Design, Window Blinds, Home Interiors, Kartik Interiors, Best Interior Design Firm" />
        <meta property="og:title" content="About Kartik Interiors - Best Interior Design & Window Blinds" />
        <meta property="og:description" content="Kartik Interiors specializes in elegant and functional interior designs. Our expert designers bring your dream spaces to life!" />
        <meta property="og:image" content={ogAbout} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Typography variant="h1"  style={{ marginTop: "50px" , textAlign: "center", fontSize: "2.5rem"}} fontWeight="bold" gutterBottom>
        About Us
      </Typography>
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
    <Container fluid >
        <section className="about-us-section">
          <div className="about-text">
            <div className="">
                <p className="about-tagline">
                    Our passion is to provide clients with superior quality Window Blinds. 🏡✨
                </p>
                <p className="">
                    At <strong>Kartik Interiors</strong>, we specialize in crafting elegant and functional spaces 
                    that reflect your personality. Our expert designers work closely with clients to bring 
                    their dream homes to life with premium quality and modern aesthetics. Whether you seek 
                    contemporary charm or timeless elegance, we are here to transform your vision into reality. 
                    Let’s create something amazing together! 🎨💫
                </p>
            </div>
          </div>
          <div className="about-image">
            <img
              src={about_img}
              alt="About Us"
              className="about-img"
              loading="lazy"
            />
          </div>
          <div>
        </div>
        </section>
      {/* Animated Counter Section */}
      <Typography variant="h2"  style={{ marginTop: "50px" , textAlign: "center", fontSize: "2rem", fontFamily: ""}} fontWeight="bold" gutterBottom>
        Numbers Speak for Themselves
      </Typography>
      
      <Box display="flex" flexWrap="wrap" justifyContent="center" sx={{
    gap: { xs: 2, sm: 10, md: 20 } // Gap is 2 on mobile, 10 on tablets, and 20 on desktop
  }}>
  {items.map((item, index) => (
    <Card elevation={6} key={index} sx={{
      padding: "20px",
      textAlign: "center",
      minWidth: "240px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // 3D shadow effect
      transition: "transform 0.2s",
      "&:hover": {
        transform: "scale(1.05)", // Slight zoom effect on hover
      },
    }}>
      <CardContent>
        <AnimatedCounter  sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" } // Smaller text on mobile
          }} value={item.value} />
        <Typography  sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.2rem" } // Smaller text on mobile
          }} variant="h6">{item.label}</Typography>
      </CardContent>
    </Card>
  ))}
</Box>


      {/* Firm Introduction Table */}
      <Typography variant="h3" fontWeight="bold" style={{ marginTop: "50px" , textAlign: "center", fontSize: "2rem"}}>
        Introduction of Firm
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 600, margin: "20px auto" }}>
        <Table>
          <TableBody>
            {[
              { label: "Establishment", value: "11/11/2017" },
              { label: "Name & Address", value: "M/s. KARTIK INTERIORS" },
              { label: "Partnership", value: "Mr. Ravindrakumar T. Singh, Mr. Harihar Gauda" },
              { label: "Bank", value: "Bank of Baroda, Majiwada Branch, Thane West" },
              { label: "PAN No.", value: "AAYFK8023B" },
              { label: "GSTIN", value: "27AAYFK8023B1Z5" },
              { label: "MSME", value: "UDYAM MH 330054425" },
            ].map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}>{row.label}</TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
      />
    </>
  );
}
