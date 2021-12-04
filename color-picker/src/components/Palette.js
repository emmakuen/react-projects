import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Palette.css";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  let colors = palette.colors[level];
  const PaletteStyles = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  };
  const PaletteColorsStyles = {
    height: "90%",
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "wrap",
  };

  const colorBoxes = colors.map((color) => (
    <ColorBox
      moreUrl={`/palette/${palette.id}/${color.id}`}
      {...color}
      key={color.hex}
      formattedColor={color[format]}
    />
  ));

  const handleSliderChange = (newLevel) => {
    setLevel(newLevel);
  };

  const changeFormat = (format) => {
    setFormat(format);
  };

  return (
    <div style={PaletteStyles} className="Palette">
      <Navbar
        level={level}
        handleSliderChange={handleSliderChange}
        changeFormat={changeFormat}
      />
      <div style={PaletteColorsStyles} className="Palette-colors">
        {colorBoxes}
      </div>
      <Footer emoji={palette.emoji} paletteName={palette.paletteName} />
    </div>
  );
};

export default Palette;
