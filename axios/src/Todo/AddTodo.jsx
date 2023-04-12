import React from "react";
import { useState } from "react";

const AddTodo = ({ onAddTodos }) => {
  const [formTodos, setFormTodos] = useState({});

  const handleChange = (e) => {
    const { id, title, status } = e.target;
    // const val = status === 'number' ? Number(title) : title;
    setFormTodos({
      [id]: id,
      [title]: title,
      [status]: status,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodos(formTodos);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          onChange={handleChange}
          value={formTodos.id}
        />
        <input
          type="text"
          placeholder="TITLE"
          onChange={handleChange}
          value={formTodos.title}
        />
        <input
          type="text"
          placeholder="STATUS"
          onChange={handleChange}
          value={formTodos.status}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddTodo;
