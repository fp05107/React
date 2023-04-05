import React, { useState } from 'react'

const FormatTimeString = ({time}) => {
    const fixTimeString = (time) =>{
        return time < 10 ?  `0${time}` : time;
    }
    const seconds = time%60;
    const min = Math.floor(time/60)%60;
    const [hour,setHour] = useState(0);
    if(min == 59){
        setHour(hour+1);
    }

    const outPutString = `${fixTimeString(hour)} : ${fixTimeString(min)} : ${fixTimeString(seconds)}`;
  return outPutString;
}

export default FormatTimeString