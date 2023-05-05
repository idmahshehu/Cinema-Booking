import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies,setMovie] = useState([])

  useEffect(()=>{
    const fetchAllMovies = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/movies");
        setMovie(res.data)
      }catch(err){
        console.log(err);
      }
    }
    fetchAllMovies()
  },[])

  const handleDelete = async (id) =>{
    try{
      await axios.delete("http://localhost:8800/movies/" + id)
      window.location.reload();
    }catch(err){
      console.log(err);
    }
  }

  return ( <div className='movies-con'>
      <h2><Link to='/add' className='btn'>Add new movie</Link></h2>
    <div className='movie-con'>
      {movies.map(movie=>(
        <div className='movie-page' key={movie.idmovies}>
          <img src={movie.cover} alt='' className='img'/>
          <h2>{movie.title}</h2>
          <p>{movie.desc}</p>
          <span>{movie.price}</span>
          <div>
          <button className="delete" onClick={()=>handleDelete(movie.idmovies)}>Delete</button>
          <button  className="update-btn"><Link className="update" to={`/update/${movie.idmovies}`}>Update</Link></button>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Movies