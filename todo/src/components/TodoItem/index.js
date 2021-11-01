import React from "react";
import "./style.css";

const TodoItem = (props) => {
  return (
    <div>
      <li>
        <h3>{props.todo.task}</h3>
        <button onClick={() => props.handleDelete(props.todos.id)}>
          Delete
        </button>
        <button onClick={() => props.handleUpdate(props.todos.id)}>
          Update
        </button>
      </li>
    </div>
  );
};
export default TodoItem;
