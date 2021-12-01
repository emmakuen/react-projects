import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../styles/Navbar.css";

const Navbar = ({ level, handleSliderChange }) => {
  return (
    <div className="Navbar">
      <div className="logo">
        <a href="#">
          <span style={{ color: "#eb3d30" }}>C</span>
          <span style={{ color: "#f69100" }}>O</span>
          <span style={{ color: "#9423a8" }}>L</span>
          <span style={{ color: "#00b4cc" }}>O</span>
          <span style={{ color: "#008e81" }}>R</span>
          <span style={{ color: "#e01b5c" }}>S</span>
        </a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={handleSliderChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
