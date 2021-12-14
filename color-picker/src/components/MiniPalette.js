import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@mui/icons-material/Delete";

import MiniPaletteStyles from "../styles/MiniPaletteStyles";

const MiniPalette = ({
  classes,
  paletteName,
  emoji,
  colors,
  goToPalette,
  deletePalette,
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

  const handleClickDelete = (e) => {
    deletePalette(e, id);
  };

  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteIcon className={classes.deleteIcon} onClick={handleClickDelete} />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <div className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </div>
    </div>
  );
};

export default withStyles(MiniPaletteStyles)(MiniPalette);
