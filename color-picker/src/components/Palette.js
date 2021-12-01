import React from "react";
import ColorBox from "./ColorBox";

const Palette = ({ colors, emoji, id, paletteName }) => {
  const PaletteStyles = {
    height: "100vh",
    overflow: "hidden",
  };
  const PaletteColorsStyles = {
    height: "90%",
  };

  const colorBoxes = colors.map((color) => (
    <ColorBox {...color} key={color.color} />
  ));
  return (
    <div style={PaletteStyles} className="Palette">
      {/* Navbar Goes Here */}
      <div style={PaletteColorsStyles} className="Palette-colors">
        {colorBoxes}
      </div>
      {/* Footer */}
    </div>
  );
};

export default Palette;
