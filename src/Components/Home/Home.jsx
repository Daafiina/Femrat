import React from 'react'
import './Home.css'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div className='home container'> 
      <div className='content'>
        <h1>We are the global champion for gender equality.</h1>
        <p>Women's rights are the fundamental human rights that were enshrined by the United Nations for every human being on the planet nearly 70 years ago.</p>
        <button className='btn'>
          <Link to='about' smooth={true} offset={-255} duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
            Learn more!
          </Link>
        </button>
      </div>
      
    </div>
  )
}

export default Home
