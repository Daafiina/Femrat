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
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing
           elit. Cupiditate, dolores. Cupiditate possimus eius 
           quaerat, debitis ullam vero? Voluptatibus voluptatum
           iusto quaerat ea ratione corrupti sequi culpa, sint 
           vel ipsum, animi qui.</p> <p>Libero, maxime quod officiis 
           illum cumque aliquid impedit, aliquam perferendis 
           praesentium velit laborum quam in quae obcaecati?
           Quam suscipit quos, nulla quas reiciendis cum sapiente dolorem nemo aliquam vel saepe accusantium voluptas? Nihil ratione cum quam soluta, excepturi, nobis repellat corporis veritatis eum molestiae blanditiis eaque dolorem velit minus alias? Iusto suscipit mollitia, voluptatem, esse beatae nemo dolorem voluptas placeat fugiat ut rerum? Rem ipsa nesciunt enim perferendis adipisci.</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nobis expedita magnam id at esse asperiores mollitia nesciunt, praesentium rerum?</p>
          <button className='btn color-1'>Read more!</button>
      </div>
    </div>
  )
}

export default About
