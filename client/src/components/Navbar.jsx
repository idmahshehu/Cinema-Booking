import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header>
      <div className="navbar-container">
        <img src="" alt="YouTube-Logo" />

        <div className="navbar">
        <div className="switch_topics">
          <h2><Link to={'/films'} className="tabs__button">Films</Link></h2>
          <h2><Link to={'/'} className="tabs__button">Cinemas</Link></h2>
          <h2><Link to={'/'} className="tabs__button"> Membership</Link></h2>
        </div>

        </div>
        <div className="auth">
             <h3 ><Link to='/login' className="btn"> Sign In </Link></h3>  
             <h3 ><Link to='/register' className="btn"> Sign Up </Link></h3>  
        </div>
      </div>
    </header>
    </div>
  )
}

export default Navbar