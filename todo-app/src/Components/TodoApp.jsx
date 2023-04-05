import React, { useState, useEffect } from "react";
import "./Todo.css"


function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data.todos));
  }, []);

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;

    const todo = {
      text: newTodo,
      completed: false,
    };

    fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todos: [...todos, todo] }),
    })
      .then((response) => response.json())
      .then((data) => setTodos(data.todos))
      .catch((error) => console.log(error));

    setNewTodo("");
  };

  const handleRemoveTodo = (id) => {
    fetch("http://localhost:4000/todos", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todos: todos.filter((todo) => todo.id !== id) }),
    })
      .then((response) => response.json())
      .then((data) => setTodos(data.todos))
      .catch((error) => console.log(error));
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    fetch("http://localhost:4000/todos", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todos: updatedTodos }),
    })
      .then((response) => response.json())
      .then((data) => setTodos(data.todos))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={handleAddTodo}>Add Task</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
