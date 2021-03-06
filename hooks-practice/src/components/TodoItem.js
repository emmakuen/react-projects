import React, { useState } from "react";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Checkbox } from "@mui/material";
import { IconButton } from "@mui/material";
import { ListItemSecondaryAction } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import TodoForm from "./TodoForm";

const TodoItem = ({
  todo: { task, completed, id },
  removeTodo,
  editTodo,
  toggleTodo,
}) => {
  const textStyle = {
    textDecoration: completed ? "line-through" : "none",
  };

  const [editing, setEditing] = useState(false);

  const handleDeleteButtonClick = () => {
    removeTodo(id);
  };

  const handleEditButtonClick = () => {
    setEditing(!editing);
  };

  const handleToggle = () => {
    toggleTodo(id);
  };

  const buildListItem = () => (
    <>
      <Checkbox
        checked={completed}
        tabIndex={-1}
        color="secondary"
        onClick={handleToggle}
      />
      <ListItemText style={textStyle}>{task}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Edit" onClick={handleEditButtonClick}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Delete" onClick={handleDeleteButtonClick}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  );

  return (
    <ListItem>
      {editing ? (
        <TodoForm
          editTodo={editTodo}
          editingTodoText={task}
          editingTodoId={id}
          setEditing={setEditing}
        />
      ) : (
        buildListItem()
      )}
    </ListItem>
  );
};

export default TodoItem;
