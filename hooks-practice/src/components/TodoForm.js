import { Paper } from "@mui/material";
import { TextField } from "@mui/material";

import useInputState from "../hooks/useInputState";

const TodoForm = ({
  addTodo,
  editTodo,
  editingTodoId,
  editingTodoText,
  setEditing,
}) => {
  const [todoText, setTodoText, resetTodoText] = useInputState(
    editingTodoText ? editingTodoText : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTodoText) {
      editTodo(editingTodoId, todoText);
      setEditing(false);
    } else {
      addTodo(todoText);
    }
    resetTodoText();
  };

  const buildForm = () => (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: editingTodoText ? "0 0.9rem" : "0",
        width: "100%",
        height: editingTodoText ? "42px" : "100%",
      }}
    >
      <TextField
        value={todoText}
        onChange={setTodoText}
        label={editingTodoText ? "" : "Add New Todo"}
        margin="normal"
        fullWidth
        variant="standard"
        autoComplete="off"
        autoFocus={editingTodoText ? true : false}
      />
    </form>
  );

  return editingTodoText ? (
    buildForm()
  ) : (
    <Paper
      style={{
        margin: "1rem 0",
        padding: "0 1rem 0.3rem",
      }}
    >
      {buildForm()}
    </Paper>
  );
};

export default TodoForm;
