import React, { useState } from 'react'

const Form = () => {
    const initState = {
        username:"",
        email:"",
        password:"",
        country:"",
        maritalStatus:false
    }
    const maritalStatus = () =>{
        
    }
    const [formData,setFormData] = useState(initState);
    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

  return (
    <div>
        <h1>FORM</h1>
        <form action="">
            <label htmlFor="">
                <input type="text" name='username' value={formData.username} onChange={handleChange} />
            </label>
            <br />
            <label htmlFor="">
                <input type="text" name='email' value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <label htmlFor="">
                <input type="text" name='password' value={formData.password} onChange={handleChange} />
            </label>
            <br />
            <label htmlFor="">
                <select  type="text" name='country' value={formData.country} onChange={handleChange} >
                    <option value="india">INDIA</option>
                    <option value="australia">AUS</option>
                    <option value="usa">USA</option>
                    <option value="china">CHINA</option>
                </select>
            </label>
            <br />
            <input type="checkbox"  checked={maritalStatus} onChange={handleChange} name='maritalStatus'/>
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form