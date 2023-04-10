import React from 'react'

const inputStyle = {
  width:"35%",
  borderRadius:"10px",
  padding:"20px",
  margin:"auto",
  marginBottom:"20px"

}

const Input = () => {
  return (
    <div>
      <input style={inputStyle} type='number' placeholder='0'/>
    </div>
  )
}

export default Input