import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'


const Navbar = () => {

  const [scrolling,setScrollig] =useState(false);

  useEffect(() => {
    window.addEventListener('scroll',() => {
      window.scrollY > 700 ? setScrollig(true) : setScrollig(false);
    })
  },[])

  return (
    //if sticky is true it returns dark-nav otherwise empty string
    <nav className={`${scrolling ? 'dark-nav' : ''}`}> 
        <img src={logo} alt="Logo" className='logo' />
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Gallery</li>
            <li>Program</li>
            <li><button className='btn color-1'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
