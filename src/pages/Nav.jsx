import React,{useContext} from 'react'
import AuthContext from '../contexts/AuthContext'
import { Link } from 'react-router-dom'


const Nav = () => {
  const {user,setUser} = useContext(AuthContext)
  return (
    <div>
      <div><img src={user.image} alt="img" /></div>
      <nav>
        <Link to="/">Home</Link>   
        <Link to="/about">About</Link>   
        <Link to="/login">Login</Link>   
        <Link to="/product/1">Product</Link>   
      </nav>
      <button onClick={()=>setUser({})}>Logout</button>
    </div>
  )
}

export default Nav