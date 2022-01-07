// import TodoItem from "./TodoItem";
import { Paper } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Divider } from "@mui/material";

const TodoList = ({ todos = [] }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <div key={todo.id}>
            <ListItem>
              <ListItemText>{todo.task}</ListItemText>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
