import React, { useEffect, useState } from 'react'
import "./Calculator.css";

const styles = {
    display:"flex",
    width:"40%",
    margin:"auto",
    border:"1px solid red",
    borderRadius:"5px",
    height:"50px",
    justifyContent:"space-around",
    marginBottom:"10px"
}

const Numbers = () => {

    const [input,setInput] = useState('');
    const handleClick = (value) =>{
        setInput(input+value);
        console.log("clicked")
    }
    const handleClear = (value) =>{
        setInput('');
    }
    const handleClearOne = (value) =>{
        let temp = '';
        for(let i=0;i<input.length-1;i++){
            temp+=input[i];
        }
        setInput(temp);
    }
    const handleGiveAnswer = (value)=>{
        setInput(eval(input));
    }
    useEffect(() =>{

    },[input])
  return (
    <div>
        <div style={styles}>
            <div onClick={() => handleClick('%')} className='innerDivElement'>%</div>
            <div onClick={() => handleClear()} className='innerDivElement'>CE</div>
            <div className='innerDivElement'>C</div>
            <div onClick={() => handleClearOne()} className='innerDivElement'>X</div>
        </div>
        <div style={styles}>
            <div className='innerDivElement'>1/x</div>
            <div className='innerDivElement'>x^^2</div>
            <div className='innerDivElement'>x^2</div>
            <div className='innerDivElement'>/</div>
        </div>
        <div style={styles}>
            <div onClick={() => handleClick('7')} className='innerDivElement'>7</div>
            <div onClick={() => handleClick('8')} className='innerDivElement'>8</div>
            <div onClick={() => handleClick('9')} className='innerDivElement'>9</div>
            <div onClick={() => handleClick('*')} className='innerDivElement'>*</div>
        </div>
        <div style={styles}> 
            <div onClick={() => handleClick('4')} className='innerDivElement'>4</div>
            <div onClick={() => handleClick('5')} className='innerDivElement'>5</div>
            <div onClick={() => handleClick('6')} className='innerDivElement'>6</div>
            <div onClick={() => handleClick('-')} className='innerDivElement'>-</div>
        </div>
        <div style={styles}>
            <div onClick={() => handleClick('1')} className='innerDivElement'>1</div>
            <div onClick={() => handleClick('2')} className='innerDivElement'>2</div>
            <div onClick={() => handleClick('3')} className='innerDivElement'>3</div>
            <div onClick={() => handleClick('+')} className='innerDivElement'>+</div>
        </div>
        <div style={styles}>
            <div className='innerDivElement'>+/-</div>
            <div onClick={() => handleClick('0')} className='innerDivElement'>0</div>
            <div onClick={() => handleClick('.')} className='innerDivElement'>.</div>
            <div onClick={() => handleGiveAnswer()} className='innerDivElement'>=</div>
        </div>
    </div>
  )
}

export default Numbers