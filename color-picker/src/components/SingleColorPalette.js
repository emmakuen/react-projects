import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const SingleColorPalette = ({
  palette,
  emoji,
  parentPaletteName,
  parentPaletteId,
}) => {
  const [format, setFormat] = useState("hex");

  const changeFormat = (format) => {
    setFormat(format);
  };

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

  const colorBoxes = Object.keys(palette.colors).map((key, index) => {
    return (
      <ColorBox
        {...palette.colors[key]}
        key={palette.colors[key].hex}
        formattedColor={palette.colors[key][format]}
      />
    );
  });

  return (
    <div style={PaletteStyles} className="SingleColorPalette">
      <Navbar changeFormat={changeFormat} />
      <div style={PaletteColorsStyles}>
        {colorBoxes}
        <div className="ColorBox go-back">
          <Link to={`/palette/${parentPaletteId}`} className="back-button">
            Go Back
          </Link>
        </div>
      </div>
      <Footer emoji={emoji} paletteName={parentPaletteName} />
    </div>
  );
};

export default SingleColorPalette;
