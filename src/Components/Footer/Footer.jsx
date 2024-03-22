import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll';

function Footer() {
  return (
    <div className='footer dark-nav'>
      <div className="icons">
        <a href=''><i class="fa-brands fa-facebook"></i></a>
        <a href=''><i class="fa-brands fa-instagram"></i></a>
        <a href=''><i class="fa-brands fa-twitter"></i></a>
        <a href=''><i class="fa-brands fa-youtube"></i></a>
        </div>
        <div className='footerNav'>
        <ul>
            <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={-255} duration={500}>About us</Link></li>
            <li><Link to='quotes' smooth={true} offset={-255} duration={500}>Quotes</Link></li>
            <li><Link to='gallery' smooth={true} offset={-150} duration={500}>Gallery</Link></li>
            <li><Link to='contact' smooth={true} offset={-265} duration={500} >Contact us</Link></li>
        </ul>
        </div>
        <div className="footerBootom">
          <p>@ 2024 Femrat.All rights reserved</p>
        <ul>
          <li>Terms of services</li>
          <li>Privacy Policy</li>
        </ul> 
        </div>
      
      </div>

  )
}

export default Footer
