import React from "react";
import { Todo } from "../constants";

type TodoItemProps = Todo;

const TodoItem = (props: TodoItemProps) => {
  return (
    <div>
      {props.message} - {props.likes}
    </div>
  );
};

export default TodoItem;
