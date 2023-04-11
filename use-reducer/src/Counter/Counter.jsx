import React, { useReducer, useState } from "react";
import { DecAction, IncAction } from "./CounterAction";
import CounterReducer from "./CounterReducer";
import { IncByValAction } from "./CounterAction";

const Counter = () => {
  const [state, dispatch] = useReducer(CounterReducer, 0);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <h2>Counter : {state}</h2>
      <button onClick={() => dispatch(IncAction)}>INC</button>
      <button onClick={() => dispatch(DecAction)}>DEC</button>
      <input
        type="number"
        value={inputValue}
        onChange={(event) => setInputValue(Number(event.target.value))}
      />
      <button onClick={() => dispatch(IncByValAction(inputValue))} >INCREMENT BY VALUE</button>
    </div>
  );
};

export default Counter;

// const [count,setCount] = useState(0);
// const handleDec = () =>{
//     setCount(count-1);
// }
// const handleInc = () =>{
//     setCount(count+1);
// }
