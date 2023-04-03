import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [val,setVal] = useState(0);
  useEffect(() =>{
    const intervalid = setInterval(() =>{
        console.log("call back")
        setVal((prevVal) =>{
            if(prevVal == 1){
                clearInterval(intervalid)
            }
            return prevVal -1;
        });

    },1000)
  },[])
    return (
    <div>
        <h2>Countdown Timer : {val}</h2>
    </div>
  )
}

export default Timer