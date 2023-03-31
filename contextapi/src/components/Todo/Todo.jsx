import React from "react";
import { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    setList([...list, newTask]);
    setNewTask("");
  };
  return (
    <div className="Todo">
      <div className="innerTodo">
        <input
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button onClick={addTask}>ADD</button>
      </div>
      <div className="innerTodo">
        {list.map((el) => {
          return <li>{el}</li>;
        })}
      </div>
    </div>
  );
};

export default Todo;
