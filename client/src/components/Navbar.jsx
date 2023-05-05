import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [auth,setAuth] = useState(false);
  const [name,setName] = useState('')
  const [message,setMessage] = useState('')

  useEffect(()=>{
    const verify = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/");
        setAuth(true);
        setName(res.data.name);
      }catch(err){
        setAuth(false);
        setMessage(err.data);
      }
    }
    verify();
  },[]);

  const handleLogout = async (e) => {
    try {
      await axios.post("http://localhost:8800/api/auth/logout");
      // remove accessToken cookie
      document.cookie = 'accessToken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      setAuth(false);
      setName('');
    } catch (err) {
      setMessage(err.response.data);
    } 
  }

  return (
    
    <div>
        <header>
      <div className="navbar-container">
        <img src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/628b859f9e81787b0b4f13c4_Cinema-logo%20(2).png" alt="" />

        <div className="navbar">
        <div className="switch_topics">
          <h2><Link to={'/'} className="tabs__button">Films</Link></h2>
          <h2><Link to={'/'} className="tabs__button">Cinemas</Link></h2>
          <h2><Link to={'/'} className="tabs__button"> Membership</Link></h2>
        </div>

        </div>
        <div className="auth">
          {
            auth?
            <div>
              <h3 onClick={handleLogout} className='logout'> Logout</h3>
            </div>
            :
            <div>
              <span ><Link to='/login' className="btn"> Sign In </Link></span>  
              <span ><Link to='/register' className="btn"> Sign Up </Link></span>  
            </div>
          }
        </div>
      </div>
    </header>
    </div>
  )
}

export default Navbar