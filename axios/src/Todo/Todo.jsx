import React, { useEffect, useState } from "react";
import { addTodos, getTodos } from "./Api";
import AddTodo from "./AddTodo";

const Todo = () => {
  function fetchTodosAndUpdateData(page) {
    getTodos({ page, limit: 5, sort: "id", order: "desc" }).then((res) =>
      setTodos(res.data)
    );
  }
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  const handleAddTodos = (data) => {
    addTodos(data).then(() => {
      fetchTodosAndUpdateData(page);
      alert('todo has been added successfully')
    });

  };

  useEffect(() => {
    fetchTodosAndUpdateData(page);
  }, [page]);
  return (
    <div>
      <h1>TODO</h1>
      <AddTodo onAddTodos={handleAddTodos} />
      {todos.map((el) => {
        return (
          <h1 key={el.id}>
            {el.id} : {el.title} : {el.status}
          </h1>
        );
      })}
      <button onClick={() => setPage(page - 1)}>Back</button>
      <button>{page}</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Todo;
