import React, { useState } from "react";
import { Todo } from "../constants";

type TodoInputProps = {
  onAdd: (todo: Todo) => void;
};

const TodoInput = (props: TodoInputProps) => {
  const { onAdd } = props;
  const [value, setValue] = useState<string>("");

  const handleChange = () => {};
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type here......"
        value={value}
        onChange={handleChange}
      />
      <select></select>
      <button type="submit"></button>
    </form>
  );
};

export default TodoInput;
