import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useTodoState = (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);

  return {
    todos,

    addTodo: (newTask) => {
      setTodos([...todos, { id: uuidv4(), task: newTask, completed: false }]);
    },

    removeTodo: (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },

    editTodo: (id, updatedTask) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, task: updatedTask } : todo
        )
      );
    },

    toggleTodo: (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
  };
};

export default useTodoState;
