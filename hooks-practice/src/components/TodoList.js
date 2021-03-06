import TodoItem from "./TodoItem";
import { Paper } from "@mui/material";
import { List } from "@mui/material";
import { Divider } from "@mui/material";

const TodoList = ({ todos, removeTodo, editTodo, toggleTodo }) => {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            <div key={todo.id}>
              <TodoItem
                todo={todo}
                key={todo.id}
                removeTodo={removeTodo}
                editTodo={editTodo}
                toggleTodo={toggleTodo}
              />
              {todos.length - 1 !== index && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default TodoList;
