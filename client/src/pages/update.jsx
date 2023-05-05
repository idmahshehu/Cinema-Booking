import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


const Update = () => {
  const [movie,setMovie] = useState({
    title:"",
    desc:"",
    price:null,
    cover:""
  });

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname.split("/")[2]);

  const movieId = location.pathname.split("/")[2];

  // const handleChange = (e) =>{
  //   setMovie((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie(prevState => Object.assign({}, prevState, { [name]: value }));
  }

  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.put("http://localhost:8800/movies/" + movieId, movie)
      navigate("/movies")
    }catch(err){
      console.log(err);
    }
  }
  
  return (
    <div className='form-update'>
      <h2>Update the movie</h2>
      <input type="text" placeholder='title' onChange={handleChange} name='title' />
      <input type="text" placeholder='desc' onChange={handleChange}  name='desc'/>
      <input type="number" placeholder='price' onChange={handleChange}  name='price'/>
      <input type="text" placeholder='cover' onChange={handleChange}  name='cover'/>

      <button className='formButton' onClick={handleClick}>Add</button>
    </div>
  )
}

export default Update