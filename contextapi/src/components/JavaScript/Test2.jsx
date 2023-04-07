import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Test2 = () => {
    const [count,setCount] = useState(0);
    const changeTitle = () =>{
        
        setCount(count+1);
    }
    useEffect(() =>{
        document.title = `Count Button clicked ${count} times`
    },[count])
   return (
    <div>
        <button onClick={changeTitle}>Count : {count}</button>
    </div>
  )
}

export default Test2