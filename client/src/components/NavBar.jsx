import React from 'react'
import logo from "../assets/logo.png"
import "../App.css"
import "./About.css"
import AboutPage from './AboutPage'
import { useState } from 'react'


const NavBar = () => {
  const [showAbout, setShowAbout] = useState(false)
  return (
    <nav className='navBar'>
      <div className='websiteName'>
        <img src={logo} alt="logo" />
        <h1>Book Mark App</h1>
      </div>
      <div className="links" onMouseOver={() => { setShowAbout(true) }} onMouseOut={() => setShowAbout(false)}>
        <span style={{fontSize:"larger"}}>About</span>
      </div>
      <div className={showAbout ? "about-page show-about" : "about-page"} >
         <AboutPage/>
      </div>
    </nav>
  )
}

export default NavBar