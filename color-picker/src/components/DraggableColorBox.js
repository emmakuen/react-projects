import React from "react";
import { withStyles } from "@material-ui/styles";
import DraggableColorBoxStyles from "../styles/DraggableColorBoxStyles";

const DraggableColorBox = ({ color, removeColor, classes }) => {
  const handleClick = () => {
    removeColor(color);
  };

  return (
    <div
      style={{ backgroundColor: color }}
      className={classes.root}
      onClick={handleClick}
    >
      <h1>{color}</h1>
    </div>
  );
};

export default withStyles(DraggableColorBoxStyles)(DraggableColorBox);
