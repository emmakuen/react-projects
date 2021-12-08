import React from "react";
import { withStyles } from "@material-ui/styles";
import DraggableColorBoxStyles from "../styles/DraggableColorBoxStyles";

const DraggableColorBox = ({ color, name, removeColor, classes }) => {
  const handleClick = () => {
    removeColor(color);
  };

  return (
    <div
      style={{ backgroundColor: color }}
      className={classes.root}
      onClick={handleClick}
    >
      <p>{name}</p>
    </div>
  );
};

export default withStyles(DraggableColorBoxStyles)(DraggableColorBox);
