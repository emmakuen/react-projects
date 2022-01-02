import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import { withStyles } from "@material-ui/styles";
import MiniPaletteStyles from "../styles/MiniPaletteStyles";

const MiniPalette = ({
  classes,
  paletteName,
  emoji,
  colors,
  goToPalette,
  openDialog,
  id,
}) => {
  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColorBox}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));

  const handleClick = () => {
    goToPalette(id);
  };

  const handleDelete = (e) => {
    openDialog(e, id);
  };

  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteIcon className={classes.deleteIcon} onClick={handleDelete} />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <div className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </div>
    </div>
  );
};

export default withStyles(MiniPaletteStyles)(MiniPalette);
