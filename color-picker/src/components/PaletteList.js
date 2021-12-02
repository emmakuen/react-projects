import React from "react";
import { Link } from "react-router-dom";

const PaletteList = ({ palettes }) => {
  return (
    <div className="PaletteList">
      {palettes.map((palette) => (
        <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
      ))}
    </div>
  );
};

export default PaletteList;
