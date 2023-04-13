import React, { useState } from "react";
// import { addTodos } from "./Api";
const Form = ({onAddTodos}) => {
  const [formdata, setFormdata] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodos(formdata);
    setFormdata({});
  };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormdata({
        ...formdata,[name]:value
    })
  };
  return (
    <div>
         
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          onChange={handleOnChange}
          value={formdata.id}
          name="id"
        />
        <input
          type="date"
          placeholder="TIMESTAMP"
          onChange={handleOnChange}
          value={formdata.timestamp}
          name="timestamp"
        />
        <input
          type="text"
          placeholder="TITLE"
          onChange={handleOnChange}
          value={formdata.title}
          name="title"
        />
        <input
          type="text"
          placeholder="DESCRIPTION"
          onChange={handleOnChange}
          value={formdata.description}
          name="description"
        />
        <input
          type="date"
          placeholder="DUE DATE"
          onChange={handleOnChange}
          value={formdata.duedate}
          name="duedate"
        />
        <input
          type="text"
          placeholder="TAG"
          onChange={handleOnChange}
          value={formdata.tag}
          name="tag"
        />
        <input
          type="text"
          placeholder="STATUS"
          onChange={handleOnChange}
          value={formdata.status}
          name="status"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
