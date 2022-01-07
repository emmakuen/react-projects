import TodoItem from "./TodoItem";
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
          <>
            <ListItem key={todo.id}>
              <ListItemText>{todo.task}</ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
