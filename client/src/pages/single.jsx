import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Single = () => {
    const [post,setPosts] = useState({});

    const location = useLocation();

    const postId= location.pathname.split("/")[2];
    // console.log(postId);

    useEffect(()=>{

        const fetchAllPages = async ()=>{
            try{
                const res = await axios.get(`http://localhost:8800/single/${postId}`);
                setPosts(res.data);
            }catch(err){
                console.log(err);
            }
        }
        
        
        // const fetchAllPages = async ()=>{
        //   try{
        //     const res = await axios.get(`http://localhost:8800/single/${postId}/`);
        //     setPosts(res.data);
        //     // console.log(res.data);
        //   }catch(err){
        //     console.log(err);
        //   }
        // }
        fetchAllPages()
      },[postId]);


  return (
    <div className='single'>
        <div className="content">
            {post.postId}
            <img src={post.cover} alt="" />
            <div className="title">
                <h4>{post.title}</h4>
            </div>
        </div>

        <div className="menu">
            {post.desc}
            {post.price}
        </div>
    </div>
  )
}

export default Single