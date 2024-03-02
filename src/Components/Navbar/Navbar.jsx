import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="Logo" className='logo' />
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Gallery</li>
            <li><button className='btn color-1'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
