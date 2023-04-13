import React, { useState, useEffect } from "react";
import { addTodos, getTodos } from "./Api";
import Form from "./Form";

const MyTodo = () => {
  const [tasks, setTasks] = useState([]);

  function handleAxiosGet() {
    getTodos()
      .then((response) => setTasks(response.data))
      .catch((error) => console.log(error));
  }
console.log(tasks)
  const handleAddTodos = (data) =>{
    addTodos(data).then((res) =>{
        handleAxiosGet();
    })
  }

  useEffect(() => {
    handleAxiosGet();
  }, []);
  return (
    <>
      <Form onAddTodos={handleAddTodos} />
      <table>
        <thead>
          <tr>
            <th>Timestamp created</th>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Tag</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.timestamp}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td>{task.tag}</td>
              <td>{task.status}</td>
              <button>DELETE TASK</button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MyTodo;
