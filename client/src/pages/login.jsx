import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    // const [username,setUsername] = useState("");
    // const [password,setPassword] = useState("");
    // const [loginStatus,setloginStatus] = useState("");

    // const [inputs,setInputs] = useState({
    //     username:"",
    //     password:"",
    // });

// const [err, setErr] = useState(null);


// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((prevInputs) => {
//       return Object.assign({}, prevInputs, {
//         [name]: value,
//       });
//     });
//   };
    // const handleChange = (e) =>{
    //     setInputs(prev=>({...prev, [e.target.name]: e.target.value }))
    // };

    //keq- const login = async (e)=> {
    //     const res = await axios.post("http://localhost:8800/api/auth/login", inputs);

    //     const setCurrentUser= (await res).data;
    // }

    // const navigate = useNavigate();
    // const handleClick = () =>{
    //     axios.post("http://localhost:8800/api/auth/login", {
    //         username:username,
    //         password:password,
    //     }).then((response)=>{
    //         if(response.data.message){ //kur user nuk ekziston
    //             setloginStatus(response.data.message);
    //         }else{ //kur ekziston
    //             // setloginStatus(response.data[0].username);
    //             navigate("/");
    //         }
            
    //     });
        
    // };

    const [inputs,setInputs] = useState({
        username:"",
        password:"",
    });

const [err, setErr] = useState(null);

const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => {
      return Object.assign({}, prevInputs, {[name]: value,});
    });
  };

    // const handleChange = (e) =>{
    //     setInputs(prev=>({...prev, [e.target.name]: e.target.value }))
    // };

    console.log(inputs);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    // const handleClick = async (e) =>{
    //      await axios.post("http://localhost:8800/api/auth/login", inputs)
    //             .then( res =>{
    //             if(res.data.Status === "Success"){ //kur user nuk ekziston
    //                 navigate("/");
    //             }else{ //kur ekziston
    //                 // setloginStatus(response.data[0].username);
    //                 console.log(res.data.Status);
    //                 alert("Error")
    //             }
                
    //         });
            
    //     };

    const handleClick = async (e) =>{
        e.preventDefault() ;
        try{
            await axios.post("http://localhost:8800/api/auth/login", inputs);
            navigate("/");
        }catch(err){
            setErr(err.response.data);
        }
    };

    
  return (
    <div className='login'>
        <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" 
            name="username" 
            className="form-control" 
            placeholder="Enter username" 
            onChange={handleChange}/>
        </div> 

        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" 
            name="password" 
            className="form-control" 
            placeholder="Enter password" 
            onChange={handleChange}/>
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleClick} >Log In</button>
        {err && err}
        <div>
            Don't have an account yet?
            <Link to='/register' className='register-btn'> Register now </Link>
            <br />
            {/* <p>{loginStatus}</p> */}
        </div>
    </div>
  )
}

export default Login