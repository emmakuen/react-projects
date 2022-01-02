import React from "react";
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import DraggableColorBoxStyles from "../styles/DraggableColorBoxStyles";

const DraggableColorBox = SortableElement(
  ({ color, formattedColor, name, removeColor, classes }) => {
    const handleClick = () => {
      removeColor(color);
    };

    return (
      <div
        style={{ backgroundColor: color }}
        className={classes.root}
        onClick={handleClick}
      >
        <div className={classes.boxContent}>
          <span>{name}</span>
          <span>
            <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
          </span>
        </div>
      </div>
    );
  }
);

export default withStyles(DraggableColorBoxStyles)(DraggableColorBox);
