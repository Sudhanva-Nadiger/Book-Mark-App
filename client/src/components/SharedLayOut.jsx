import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const SharedLayOut = () => {
    return (
        <div>
            <NavBar/>
    
            <section>
                <Outlet />
            </section>
    
        </div>
      )
}

export default SharedLayOut