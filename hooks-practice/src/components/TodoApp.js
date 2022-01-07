import React, { useEffect } from "react";

import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Grid } from "@mui/material";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import useTodoState from "../hooks/useTodoState";

const localStorageKey = "todos";

const updateLocalStorage = (localStorageKey, value) => {
  const jsonValue = JSON.stringify(value);
  localStorage.setItem(localStorageKey, jsonValue);
};

const TodoApp = () => {
  const initialTodos = JSON.parse(localStorage.getItem(localStorageKey)) || [];
  const { todos, addTodo, removeTodo, editTodo, toggleTodo } =
    useTodoState(initialTodos);

  useEffect(() => {
    updateLocalStorage(localStorageKey, todos);
  }, [todos]);

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
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            editTodo={editTodo}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
export default TodoApp;
