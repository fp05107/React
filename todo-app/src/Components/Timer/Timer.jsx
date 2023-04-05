import React, { useRef, useState } from 'react'
import FormatTimeString from './FormatTimeString';

const Timer = () => {
    const [timer,setTimer] = useState(0);
    const ref = useRef(null);
    const startTimer = () =>{
        if(ref.current !== null){
            return;
        }
        ref.current = setInterval(() =>{
            setTimer((prevTime) => prevTime+1);
        },0)
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
        <h1>Timer : <FormatTimeString time={timer} /></h1>
        <button  onClick={startTimer}>START</button>
        <button onClick={stopTimer}>STOP</button>
        <button onClick={resetTimer}>RESET</button>
    </div>
  )
}

export default Timer