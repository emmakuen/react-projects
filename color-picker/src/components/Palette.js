import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../styles/Palette.css";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);
  let colors = palette.colors[level];
  const PaletteStyles = {
    height: "100vh",
    overflow: "hidden",
  };
  const PaletteColorsStyles = {
    height: "90%",
  };

  const colorBoxes = colors.map((color) => (
    <ColorBox {...color} key={color.hex} />
  ));

  const handleSliderChange = (newLevel) => {
    setLevel(newLevel);
  };

  return (
    <div style={PaletteStyles} className="Palette">
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={handleSliderChange}
        />
      </div>
      {/* Navbar Goes Here */}
      <div style={PaletteColorsStyles} className="Palette-colors">
        {colorBoxes}
      </div>
      {/* Footer */}
    </div>
  );
};

export default Palette;
