import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import './FloatingWhatsAppButton.css';
const FloatingWhatsAppButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+919424200676"  
      accountName="Kartik Interiors"
      chatMessage="Hello! 👋 How can we help you today?"
      statusMessage="Typically replies within a few minutes"
      allowEsc
      allowClickAway
      notification
      notificationSound
      styles={{
        width: window.innerWidth < 600 ? "250px" : "350px",
        height: window.innerWidth < 600 ? "400px" : "500px",
        bottom: "20px",  
        right: "10px", 
      }}
    />
  );
};

export default FloatingWhatsAppButton;
