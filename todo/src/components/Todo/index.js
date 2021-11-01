import React, { Component } from "react";
import TodoItem from "../TodoItem";
import { useState } from "react";
import "./style.css";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: "1", task: "code" },
    { id: "2", task: "sleep" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: this.state.todos.length + 1,
      name: e.target.task.value,
    };
    if (e.target.task.value) {
      setTodos([...todos, todo]);
      e.target.task.value = "";
    }
  };

  //delete
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //
  return (
    <div className="todo">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" />
        <button>Add Task</button>
      </form>
      <ul>
        {todos.map((todo, i) => (
          <TodoItem todo={todo} key={i} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
