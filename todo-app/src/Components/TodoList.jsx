import React from 'react'

const TodoList = ({ title,status }) => {
  return (
    <div>
        <b>{title}</b>
        <b>{status}</b>
    </div>
  )
}

export default TodoList