import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';


const Navbar = () => {

  const [scrolling,setScrollig] =useState(false);

  useEffect(() => {
    window.addEventListener('scroll',() => {
      window.scrollY > 700 ? setScrollig(true) : setScrollig(false);
    })
  },[])

  const [mobileMenu,setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);//When its false and you click it,it becomes true so the menu will be shown
  }

  return (
    //if sticky is true it returns dark-nav otherwise empty string
    <nav className={`${scrolling ? 'dark-nav' : ''}`}> 
        <img src={logo} alt="Logo" className='logo' />
        <ul className={mobileMenu? '' : 'hide-menu'}>
            <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={-255} duration={500}>About us</Link></li>
            <li><Link to='quotes' smooth={true} offset={-255} duration={500}>Quotes</Link></li>
            <li><Link to='gallery' smooth={true} offset={-150} duration={500}>Gallery</Link></li>
            <li><Link to='contact' smooth={true} offset={-265} duration={500} >Contact us</Link></li>
        </ul>
        <img src={menu} alt="" className='menu-icon'
        onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
