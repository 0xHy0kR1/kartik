import React, { useState, useEffect} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./VideoModal.css";
import { BsFullscreen } from "react-icons/bs";

const VideoModal = ({ show, handleClose, videoSrc, videoTitle }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleShare = (platform) => {
    if (!videoSrc) return;
    const encodedUrl = encodeURIComponent(videoSrc);

    let shareUrl = "";
    switch (platform) {
      case "meta":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}`;
        break;
      case "pinterest":
        shareUrl = `https://www.pinterest.com/pin/create/button/?url=${encodedUrl}`;
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodedUrl}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, "_blank");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = videoSrc;
    link.download = "sample-video.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFullscreen = () => {
    const videoElement = document.getElementById("modal-video");
    if (videoElement) {
      videoElement.requestFullscreen();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header>
      <Modal.Title className="video-title">{videoTitle || "Video Sample"}</Modal.Title>
        <div className="video-modal-controls">
          <DropdownButton
            title="📤"
            show={showDropdown}
            onToggle={toggleDropdown}
            className="share-dropdown"
          >
            <Dropdown.Item onClick={() => handleShare("meta")}>📘 Share on Meta</Dropdown.Item>
            <Dropdown.Item onClick={() => handleShare("twitter")}>🐦 Share on Twitter</Dropdown.Item>
            <Dropdown.Item onClick={() => handleShare("pinterest")}>📌 Pin it</Dropdown.Item>
            <Dropdown.Item onClick={() => handleShare("whatsapp")}>💬 Share on WhatsApp</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleDownload}>⬇️ Download Video</Dropdown.Item>
          </DropdownButton>
           {isMobile ? (
            <Button variant="light" onClick={handleFullscreen} className="fullscreen-btn">
              <BsFullscreen size={24} />
            </Button>
          ) : (
            <Button variant="dark" onClick={handleFullscreen} className="fullscreen-btn">
              🔲 Full Screen
            </Button>
          )}
          <Button variant="danger" onClick={handleClose}>✖</Button>
        </div>
      </Modal.Header>
      <Modal.Body className="video-modal-body">
        {videoSrc ? (
          <video id="modal-video" controls autoPlay preload="metadata">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>No video selected.</p>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default VideoModal;
