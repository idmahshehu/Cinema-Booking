import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [homeM,setHome] = useState([]);

  useEffect(()=>{
    const fetchAllFilms = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/");
        setHome(res.data)
      }catch(err){
        console.log(err);
      }
    }
    fetchAllFilms()
  },[])
    
  return (
    <div className="home">
      
    
        <div className="movies_desc">
          <img
            className="img-desc"
            src="https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2022/12/ant-man-and-the-wasp-quantumania-639cb900191a2-e1672366739173.jpg?resize=860%2C610&ssl=1"
            alt=""
            />
          <span className="title-desc">
            <h3>THE GREATEST SHOWS </h3>
              <h3> ON SCREEN</h3>
            </span>

          <h2 className="movie-item-desc-btn">Book Now</h2>
        </div>
      <h1>TOP FILMS </h1>
      <hr />
      <br />
      
      <div className="home-films">

            {homeM.map(home=>(
              <div className='movie' key={home.idmovies}>
                  <img  src={home.cover} alt='' className='img'/>
                <Link to={`/single/${home.idmovies}`} >
                <h2 className="h2">{home.title}</h2></Link>
              </div>
            ))}
      </div>
      <h2 ><Link to={'/movies'} className="edit">Edit Movies</Link></h2>

    </div>
  );
}

export default Home;
