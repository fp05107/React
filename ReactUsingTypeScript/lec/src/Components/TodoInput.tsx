import React, { useState } from "react";
import { Todo, TodoType } from "../constatnts";
import { addTodo } from "../api";

type TodoInputProps = {
  onAdd: (todo: Todo) => void;
};

const TodoInput = (props: TodoInputProps) => {
  const { onAdd } = props;
  const [value, setValue] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data =  await addTodo(value, TodoType.Learned);
    onAdd(data);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Type here... " onChange={handleChange} />
      <select>
        {/* <option value="">{TodoType.Learned}</option>
        <option value="">{TodoType.Learning}</option>
        <option value="">{TodoType.Pending}</option>
        <option value="">{TodoType.Revision}</option> */}
        {
          Object.values(TodoType).map((todoType) => (
            <option key={todoType} value={todoType}>
              {todoType}
            </option>
          ))
        }
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
