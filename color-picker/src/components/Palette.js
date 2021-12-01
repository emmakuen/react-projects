import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
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
      <Navbar level={level} handleSliderChange={handleSliderChange} />
      <div style={PaletteColorsStyles} className="Palette-colors">
        {colorBoxes}
      </div>
      {/* Footer */}
    </div>
  );
};

export default Palette;
