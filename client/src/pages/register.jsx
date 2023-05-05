import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [inputs,setInputs] = useState({
        username:"",
        email:"",
        password:"",
        firstname:"",
        lastname:"",
    });

const [err, setErr] = useState(null);

    const handleChange = (e) =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value }))
    };

    // console.log(inputs);
    const navigate = useNavigate();

    const handleClick = async e =>{
        e.preventDefault()
        
        try{
            await axios.post("http://localhost:8800/api/auth/register", inputs)
            navigate("/login")

        }catch(err){
            setErr(err.response.data);
        }
    }


  return (

    <div className='register'>
        <div className="form-reg">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-con" name="firstname" placeholder="Enter name" onChange={handleChange}/>
        </div>
        <div className="form-reg">
            <label htmlFor="surname">Lastname:</label>
            <input type="text" className="form-con" name="lastname" placeholder="Enter Lastname" onChange={handleChange}/>
        </div>
        <div className="form-reg">
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" className="form-con" id="username" placeholder="Enter username" onChange={handleChange}/>
        </div>
        <div className="form-reg">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-con" name="email" placeholder="Enter email" onChange={handleChange}/>
        </div>
        <div className="form-reg">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" className="form-con" id="password" placeholder="Enter password" onChange={handleChange}/>
        </div>

        {err && <p>{err}</p>}
        <button type="submit" className="btn btn-primary" onClick={handleClick} >Submit</button>

    </div>
  )
}

export default Register