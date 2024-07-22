import React from 'react'
import Logo from './logo'
import './Navbar.css'
import Navlist from './Navlist'
import Navbtn from '../Button-Comp/Navbtn'

const Navbar = () => {
  return (
    <>
    <div className="container">
    <nav>
    <div className="navbar">
     <Logo logo="https://tuskerscaresolutions.com/wp-content/uploads/2024/05/logo.png"/>
    <Navlist/>
    <Navbtn name="join us"/>
    
    </div>
    </nav>
    </div>
    </>
  )
}

export default Navbar
