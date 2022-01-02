import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import { withStyles } from "@material-ui/styles";
import PaletteStyles from "../styles/PaletteStyles";

const Palette = ({ palette, classes }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  let colors = palette.colors[level];

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
    <div className={classes.palette}>
      <Navbar
        level={level}
        handleSliderChange={handleSliderChange}
        changeFormat={changeFormat}
      />
      <div className={classes.paletteColors}>{colorBoxes}</div>
      <PaletteFooter emoji={palette.emoji} paletteName={palette.paletteName} />
    </div>
  );
};

export default withStyles(PaletteStyles)(Palette);
