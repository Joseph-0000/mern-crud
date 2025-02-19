import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
        <Link to="/edit">Edit</Link>
    </>
  )
}

export default Navbar