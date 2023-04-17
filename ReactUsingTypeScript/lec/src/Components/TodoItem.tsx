import React from "react";
import { ColorMap, Todo } from "../constatnts";
import { updateTodo } from "../api";

interface TodoItemProps extends Todo{
  onUpdate: (todo: Todo) => void
};

const TodoItem = (props: TodoItemProps) => {
  const handleClick = async () =>{
    let updatedTodo = await updateTodo({
      ...props,
      likes:props.likes+1,
    });
    props.onUpdate(updatedTodo);
  }
  return (
    <div onClick={handleClick} style={{ padding: "5px", backgroundColor: ColorMap[props.type] }}>
      {props.message} - {props.likes}
    </div>
  );
};

export default TodoItem;
