import React, { useState } from "react";

import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Grid } from "@mui/material";

import TodoList from "./TodoList";

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: "Shopping", completed: false },
    { id: 2, task: "Do dishes", completed: true },
    { id: 3, task: "Walk dogs", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="secondary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <TodoList todos={todos} />
    </Paper>
  );
};
export default TodoApp;
