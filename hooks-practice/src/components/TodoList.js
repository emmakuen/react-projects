import TodoItem from "./TodoItem";
import { Paper } from "@mui/material";
import { List } from "@mui/material";
import { Divider } from "@mui/material";

const TodoList = ({ todos = [], removeTodo, editTodo, toggleTodo }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem
              todo={todo}
              key={todo.id}
              removeTodo={removeTodo}
              editTodo={editTodo}
              toggleTodo={toggleTodo}
            />
            <Divider />
          </div>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
