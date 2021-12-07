import React from "react";
import { withStyles } from "@material-ui/styles";
import MiniPaletteStyles from "../styles/MiniPaletteStyles";

const MiniPalette = ({
  classes,
  paletteName,
  emoji,
  colors,
  goToPalette,
  id,
}) => {
  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColorBox}
      style={{ backgroundColor: color.color }}
      key={color.hex}
    />
  ));

  const handleClick = () => {
    console.log(id);
    goToPalette(id);
  };

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <div className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </div>
    </div>
  );
};

export default withStyles(MiniPaletteStyles)(MiniPalette);
