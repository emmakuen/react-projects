import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div>
      <h2 style={{ textDecoration: todo.completed && "line-through" }}>
        {todo.task}
      </h2>
    </div>
  );
};

export default TodoItem;
