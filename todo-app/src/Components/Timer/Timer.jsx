import React, { useRef, useState } from 'react'

const Timer = () => {
    const [timer,setTimer] = useState(0);
    const ref = useRef(null);
    const startTimer = () =>{
        if(ref.current !== null){
            return;
        }
        ref.current = setInterval(() =>{
            setTimer((prevTime) => prevTime+1);
        },1000)
    }
    const stopTimer = () =>{
        clearInterval(ref.current);
        ref.current = null;
    }
    const resetTimer = () =>{
        stopTimer();
        setTimer(0);
    }
  return (
    <div>
        <h1>Timer : {timer}</h1>
        <button  onClick={startTimer}>START</button>
        <button onClick={stopTimer}>STOP</button>
        <button onClick={resetTimer}>RESET</button>
    </div>
  )
}

export default Timer