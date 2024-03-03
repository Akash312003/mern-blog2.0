import React, { useState, useContext, useEffect } from 'react'
import {DUMMY__POSTS}  from '../data'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext';



const Dashboard = () => {
  const[posts, setPosts] = useState(DUMMY__POSTS)


  const navigate = useNavigate();

  const {currentUser}  = useContext(UserContext)
  const token = currentUser?.token;
  
  useEffect(() =>{
    if(!token){
      navigate('/login')
    }
  },[])


  return (
    <section className='dashboard'>
      {
        posts.length ? <div className="container dashboard__container">
          {
            posts.map(post => {
              return <article key={posts.id} className='dashboard__post'> 
              <div className="dashboard__post-info">
                <div className="dashboard__post-thumbnail">
                  <img src={post.thumbnail} alt='' />
                </div>
                <h5>{post.title}</h5>
              </div>
              <div className="dashboard__post-actions">
                <Link to={`/posts/${post.id}`} className='btn sm'>View</Link>
                <Link to={`/posts/${post.id}/edit`} className='btn sm primary'>Edit</Link>
                <Link to={`/posts/${post.id}/delete`} className='btn sm danger'>Delete</Link>
              </div>
              </article>
            })
          }

        </div>  : <h2 className='center'> You have no posts yet.</h2>
      }
    </section>
  )
}

export default Dashboard