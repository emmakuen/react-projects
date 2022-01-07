import React from "react";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Checkbox } from "@mui/material";
import { IconButton } from "@mui/material";
import { ListItemSecondaryAction } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TodoItem = ({ todo: { task, completed } }) => {
  const textStyle = {
    textDecoration: completed ? "line-through" : "none",
  };

  return (
    <ListItem>
      <Checkbox checked={completed} tabIndex={-1} color="secondary" />
      <ListItemText style={textStyle}>{task}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Edit">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
