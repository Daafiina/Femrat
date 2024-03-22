import React from 'react'
import hand from '../../assets/rights.jpeg'
import './About.css'

function About() {
  return (
    <div className='about'>
      <div className='left-side'>
        <img src={hand} alt="" className='image'/>
      </div>
      <div className='right-side'>
        <h3>Learn more about us</h3>
        <h2>Empowering Women Globally for Equality and Rights</h2>
        <p>Femrat is an independent organization steadfast in its commitment to advancing gender equality and promoting the realization
           of women's human rights globally. At Femrat, we passionately advocate for a just world where the rights of all women are not
           only acknowledged but respected, realized, and valued.</p>

           <p>In our vision, women of all backgrounds, identities, and circumstances are empowered to live without fear of discrimination,
            violence, or oppression. We envision a world where every woman has access to education, healthcare, economic opportunities, and decision-making processes, ensuring her autonomy and agency in shaping her own life.</p>
          {/* <button className='btn color-1'>Read more!</button> */}
      </div>
    </div>
  )
}

export default About
