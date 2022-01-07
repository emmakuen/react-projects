import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Grid } from "@mui/material";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: "Shopping", completed: false },
    { id: 2, task: "Do dishes", completed: true },
    { id: 3, task: "Walk dogs", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
  };

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
      <Grid container justifyContent="center" style={{ marginTop: "1.5rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} />
        </Grid>
      </Grid>
    </Paper>
  );
};
export default TodoApp;
