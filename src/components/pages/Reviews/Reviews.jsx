import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { useResizeDetector } from "react-resize-detector";
import FullWidth from "./FullWidth";
import { Helmet } from "react-helmet-async";
import "./Reviews.css";

const Height = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
`;

const Box = styled.div`
  padding: ${(props) => props.scale * 25}px;
`;

const Review = styled.div`
  overflow: hidden;
  width: ${(props) => props.scale * 400}px;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.scale * 20}px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  align-items: center;
  text-align: center;
`;

const Avatar = styled.div`
  border-radius: 80%;
  width: ${(props) => props.scale * 80}px;
  height: ${(props) => props.scale * 80}px;
  overflow: hidden;
  margin-bottom: ${(props) => props.scale * 15}px;

  img {
    max-width: 100%;
    height: 100%;
    width: 100%;
  }
`;

const Content = styled.div`
  h3 {
    margin: 0;
    color: #222;
    font-family: "Helvetica", sans-serif;
    font-size: ${(props) => props.scale * 26}px;
    font-weight: bold;
    margin-bottom: ${(props) => props.scale * 8}px;
  }

  p {
    margin: 0;
    color: #444;
    font-family: "Helvetica", sans-serif;
    font-size: ${(props) => props.scale * 19}px;
    line-height: ${(props) => props.scale * 20}px;
    font-weight: 300;
    margin-bottom: ${(props) => props.scale * 15}px;
  }
`;

const portraits = [
  require("../../../assets/avatars/a1.jpg"),
  require("../../../assets/avatars/a2.jpg"),
  require("../../../assets/avatars/a3.jpg"),
  require("../../../assets/avatars/a4.jpg"),
  require("../../../assets/avatars/a5.jpg"),
];

const reviewerNames = [
  "Aarav Sharma",
  "Vivaan Mehta",
  "Advait Joshi",
  "Rohan Verma",
  "Arjan Singh",
];

const reviewsText = [
  "Kartik Interiors transformed my home with their stunning designs and impeccable craftsmanship. Truly a dream come true!",
  "Their turnkey solutions made my office renovation seamless. High-quality work, timely delivery, and absolute professionalism!",
  "From modular kitchens to exquisite wall finishes, Kartik Interiors exceeded my expectations at every step.",
  "Their expert team handled everything from civil repairs to elegant interior design. My space looks luxurious and well-planned!",
  "Kartik Interiors’ attention to detail and commitment to quality set them apart. Highly recommended for any interior or exterior project!",
];

const Reviews = () => {
  const [key, setKey] = useState(nanoid());
  const { width } = useResizeDetector();

  useEffect(() => {
    setKey(nanoid());
  }, [width]);

  let scale = 0.5;
  if (width && width > 800) scale = 0.65;
  if (width && width > 1100) scale = 0.8;
  if (width && width > 1400) scale = 1;

  return (
    <FullWidth>
      <Helmet>
        <meta
          name="description"
          content="Read what our satisfied clients say about Kartik Interiors. High-quality home and office interior design services."
        />
        <meta property="og:title" content="Client Reviews | Kartik Interiors" />
        <meta property="og:description" content="Transform your space with the best in interior design." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "Organization",
              "name": "Kartik Interiors"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Verified Clients"
            }
          })}
        </script>
      </Helmet>
      <Height height={600}>
        <Marquee key={key} velocity={25} scatterRandomly direction={"ltr"}>
          {reviewsText.map((review, index) => (
            <Box key={`review-${index}`} scale={scale}>
              <Review scale={scale}>
                <Avatar scale={scale}>
                  <img src={portraits[index]} alt={`Avatar of ${reviewerNames[index]}`} loading="lazy" />
                </Avatar>
                <Content scale={scale}>
                  <h3 className="review-name">{reviewerNames[index]}</h3>
                  <p className="review-text">{review}</p>
                </Content>
              </Review>
            </Box>
          ))}
        </Marquee>
      </Height>
    </FullWidth>
  );
};

export default React.memo(Reviews);
