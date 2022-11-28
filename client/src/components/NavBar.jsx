import React from 'react'
import logo from "../assets/logo.png"
import "../App.css"
import "./About.css"
import AboutPage from './AboutPage'
import { useState } from 'react'


const NavBar = ({setShowSearchResults,setSearchQuery}) => {
  const [showAbout, setShowAbout] = useState(false)
  return (
    <nav className='navBar'>
      <div onClick={()=>{setShowSearchResults(false); setSearchQuery("")}} className='websiteName'>
        <img src={logo} alt="logo" />
        <h1 style={
          {cursor:"pointer"}
        }>Book Mark App</h1>
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