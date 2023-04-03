import React from 'react'

const Demo = () => {
    const [count,setCount] = React.useState(0);

    const countHandler = () =>{
        // setCount(count-1);
        setCount(count+1);
        setCount((count) => count+1);
        setCount((count) => count+1);
        setCount(count-1);
        // window.alert(count);

    }

    const styles = {
        border : '1px solid red',
        width : '100%',
        margin : 'auto',
        padding : 'auto'
    }
    const btn = {
        width : '200px',
        padding : '20px',
        margin : 'auto',
        borderRadius : '50%'
    }

  return (
    <div style={styles} className='Demo'>
        <button style={btn} onClick={countHandler}>COUNT</button>
        <h1>{count}</h1>
    </div>
  )
}

export default Demo