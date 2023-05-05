import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Add = () => {
  const [movie,setMovie] = useState({
    title:"",
    desc:"",
    cover:"",
    price:null
  });

  const navigate = useNavigate();

  const handleChange = (e) =>{
    setMovie((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setMovie(prevState => Object.assign({}, prevState, { [name]: value }));
  // }

  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/movies", movie)
      navigate("/movies");
    }catch(err){
      console.log(err);
    }
  }
  
  return (
    <div className='form-add'>
      <h2>Add new movie</h2>
      <input type="text" placeholder='title' onChange={handleChange} name='title' />
      <input type="text" placeholder='desc' onChange={handleChange}  name='desc'/>
      <input type="number" placeholder='price' onChange={handleChange}  name='price'/>
      <input type="text" placeholder='cover' onChange={handleChange}  name='cover'/>

      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add