import React from "react";
import "../styles/Footer.css";

const Footer = ({ paletteName, emoji }) => {
  return (
    <footer className="Footer">
      <span className="palette-name">{paletteName}</span>
      <span className="emoji">{emoji}</span>
    </footer>
  );
};

export default Footer;
