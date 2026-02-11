import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
   <nav>
    <div className="logo">It's VKR</div>

    <ul>
        <Link  to="/"><li>Home</li></Link >
        <Link  to="/about"><li>About</li></Link >
        <Link  to="/login"><li>Login</li></Link >
        <Link  to="/signup"><li>Sign Up</li></Link >
    </ul>
   </nav>
  )
}

export default Navbar
