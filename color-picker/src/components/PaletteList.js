import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

const PaletteList = ({ palettes }) => {
  return (
    <div className="PaletteList">
      <h1>React Colors</h1>
      {palettes.map((palette) => (
        <Link to={`/palette/${palette.id}`}>
          <MiniPalette {...palette} />
        </Link>
      ))}
    </div>
  );
};

export default PaletteList;
