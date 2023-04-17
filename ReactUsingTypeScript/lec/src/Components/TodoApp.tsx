import React, { useState } from "react";
import { useEffect } from "react";
import { getTodos } from "../api";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { Todo } from "../constatnts";

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAdd = (todo: Todo) =>{
    setTodos([...todos,todo]);
  }

  const onUpdate = (updatedTodo : Todo) =>{
    let updatedTodos = todos.map((todo) =>{
      if(todo.id === updatedTodo.id){
        return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res);
    });
  }, []);

  return (
    <>
      <div>TodoApp</div>
      <TodoInput onAdd={onAdd} />
      {todos.map((el) => {
        return (
            <TodoItem key={el.id} {...el} onUpdate={onUpdate} />
        );
      })}

    </>
  );
};

export default TodoApp;
