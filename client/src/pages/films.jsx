import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Films = () => {
    
    const [posts,setPosts] = useState([]);
  return (
    <div>films

    <div className="main-container">
        {posts.map((post) => {
                <div className="post" key={post.idfilm}>
                    <div className="img">
                        <img src={post.img} alt="" />
                    </div>
                    <div className='content'>
                        <Link to={`/post/${post.id}`}>
                        <h3>{post.title}</h3>
                        </Link>
                        <p>{post.desc}</p>
                        <button>Read More</button>
                    </div>
                </div>
            })
        }
        
        
        
      </div>

    </div>
  )
}

export default Films