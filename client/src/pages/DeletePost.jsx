import React, {useContext, useEffect} from 'react'
import { Link , useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import axios from 'axios';



const DeletePost = () => {
  const navigate = useNavigate();
  const useLocation = useLocation();

const {currentUser}  = useContext(UserContext)
const token = currentUser?.token;

useEffect(() =>{
  if(!token){
    navigate('/login')
  }
},[])
  return (
    <Link className='btn sm danger'>Delete</Link>
  )
}

export default DeletePost