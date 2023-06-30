import React, { useEffect, useState } from "react";
import { getTodos } from "../api";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { Todo } from "../constants";

const TodoApp = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos().then((d) => {
      setTodos(d);
    });
  }, []);

  const onAdd = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput onAdd={onAdd} />
      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoItem key={todo.id} {...todo} />
        </div>
      ))}
    </div>
  );
};

export default TodoApp;
