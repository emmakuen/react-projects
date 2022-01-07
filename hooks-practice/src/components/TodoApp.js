import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Grid } from "@mui/material";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const localStorageKey = "todos";

const updateLocalStorage = (localStorageKey, value) => {
  const jsonValue = JSON.stringify(value);
  localStorage.setItem(localStorageKey, jsonValue);
};

const TodoApp = () => {
  const initialTodos = JSON.parse(localStorage.getItem(localStorageKey)) || [];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    updateLocalStorage(localStorageKey, todos);
  }, [todos]);

  const addTodo = (newTask) => {
    setTodos([...todos, { id: uuidv4(), task: newTask, completed: false }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, updatedTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
    );
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
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
