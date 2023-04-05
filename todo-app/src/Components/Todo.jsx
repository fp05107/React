import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const getTodos = () => {
  return fetch(`http://localhost:4000/tasks`).then((res) => res.json());
};

const addTodos = (todo) => {
  return fetch(`http://localhost:4000/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  }).then((res) => res.json());
};

const Todo = () => {
  const [todos, setTodos] = useState([]);
//   setTodos( {"id": 1, "text": "Learn React", "status": true });
  const handleAdd = (text) => {
    const item = {
      title: text,
      status: false,
    };
    addTodos(item).then((res) => console.log(res));
  };

  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res);
    });
  }, []);
  return (
    <div>
      <AddTodo handleAdd={handleAdd} />
      {/* {
        todos.map((el) =>{
            return (
                <TodoList title={el.title} status={el.status}/>
            );
        })
      } */}
      
    </div>
  );
};

export default Todo;
