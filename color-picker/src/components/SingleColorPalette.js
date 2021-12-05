import React from "react";
import ColorBox from "./ColorBox";

const SingleColorPalette = ({ palette }) => {
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
        formattedColor={palette.colors[key].hex}
      />
    );
  });

  console.log(palette);
  return (
    <div style={PaletteStyles}>
      <h1>Single Color Palette</h1>
      <div style={PaletteColorsStyles}>{colorBoxes}</div>
    </div>
  );
};

export default SingleColorPalette;
