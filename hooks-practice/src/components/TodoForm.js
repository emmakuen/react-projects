import { Paper } from "@mui/material";
import { TextField } from "@mui/material";

import useInputState from "../hooks/useInputState";

const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText, resetTodoText] = useInputState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoText);
    resetTodoText();
  };

  return (
    <Paper
      style={{
        margin: "1rem 0",
        padding: "0 1rem 0.3rem",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          value={todoText}
          onChange={setTodoText}
          label="Add New Todo"
          margin="normal"
          fullWidth
          variant="standard"
          autoComplete="off"
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
