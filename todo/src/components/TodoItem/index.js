import React, { Component } from "react";
import "./style.css";

const TodoItem = (props) => {
  return (
    <div className="TodoItem">
      <li>
      <span onClick={()=> props.handleDelete(props.todos.id)}>{props.todo.task}</span>
      <button onClick={()=> props.handleDelete(props.todos.id)}> Delete</button>
      {/* <button onClick={()=> props.handleUpdate(props.todos.id)}> Update</button> */}

      </li>
    </div>
  );
};
export default TodoItem;
