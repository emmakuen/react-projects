import React from "react";
import { withStyles } from "@material-ui/styles";
import miniPaletteStyle from "../styles/miniPaletteStyle";

const MiniPalette = ({ classes, paletteName, emoji, colors }) => {
  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColorBox}
      style={{ backgroundColor: color.color }}
      key={color.hex}
    />
  ));

  return (
    <div className={classes.root}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <div className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </div>
    </div>
  );
};

export default withStyles(miniPaletteStyle)(MiniPalette);
