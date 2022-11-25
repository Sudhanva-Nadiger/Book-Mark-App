import React from 'react'
import logo from "../assets/logo.png"
import "../App.css"

const NavBar = () => {
  return (
    <nav className='nav-bar'>
        <div className='website-name'>
            <img src={logo} alt="logo" />
            <h1>Book Mark App</h1>
        </div>
        <div className="links">
            <span><b>About</b></span>
        </div>
    </nav>
  )
}

export default NavBar