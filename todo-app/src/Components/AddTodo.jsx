import React, { useState } from 'react'

const AddTodo = ({handleAdd}) => {
    const [text,setText] = useState("");
    
    const handleChange = (e) =>{
        setText(e.target.value);

    }

    const handleSubmit = () =>{
        handleAdd();
    }

  return (
    <div>
        <input type="text" placeholder='Write your todo' onChange={handleChange}/>
        <button onChange={handleSubmit}>ADD</button>
    </div>
  )
}

export default AddTodo