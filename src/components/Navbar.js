import React, { useState } from 'react'
import { close, logo, menu } from "../assets";
import "./navbar.css";


function Navbar() {

    const[toggle, setToggle] = useState(false)

    function toggleMenu() {
        setToggle((prev)=> !prev)
    }

  return (
    <div className='navbar-cont all'>
        <img src={logo} className="logo" alt='logo' />

        <ul className='navbar-list'>
            <li> <a href='#home'> Home </a> </li>
            <li> <a href='#aboutus'> About Us </a> </li>
            <li> <a href='#features'> Features </a> </li>
            <li> <a href='#solution'> Solution </a> </li>
        </ul>

        <div className='smalscreen-toggle'> 
             <img src={toggle ? close : menu} onClick={toggleMenu}  />
             {toggle &&
            <ul className='smalscreen-list'>
                <li> <a href='#home'> Home </a> </li>
                <li> <a href='#aboutus'> About Us </a> </li>
                <li> <a href='#features'> Features </a> </li>
                <li> <a href='#solution'> Solution </a> </li>
            </ul>}

        </div>

    </div>
  )
}

export default Navbar