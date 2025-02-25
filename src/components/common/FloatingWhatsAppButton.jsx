import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import './FloatingWhatsAppButton.css';
const FloatingWhatsAppButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+919179082991"  // Replace with your WhatsApp number
      accountName="Kartik Interiors"
      chatMessage="Hello! 👋 How can we help you today?"
      statusMessage="Typically replies within a few minutes"
      allowEsc
      allowClickAway
      notification
      notificationSound
    />
  );
};

export default FloatingWhatsAppButton;
