import React, { useState } from "react";
import TodoItem from "../TodoItem";
import "./style.css";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: "1", task: "code" },
    { id: "2", task: "sleep" },
  ]);

  //add
  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: todos.length + 1,
      task: e.target.task.value,
    };
    setTodos([...todos, todo]);
    e.target.task.value = "";
  };

  //delete
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // update
  // const handleUpdate = (id, e) => {
  //   setTodos(todos.splice(2, 1, " e.target.task.value"));
  // };

  return (
    <div className="todo">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" />
        <button>Add Task</button>
      </form>
      <ul>
        {todos.map((todo, i) => {
          return <TodoItem todo={todo} key={i} handleDelete={handleDelete} />;
        })}
      </ul>
    </div>
  );
};
export default Todo;
