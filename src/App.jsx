import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Title from './Components/Title/Title'
import Gallery from './Components/Gallery/Gallery'
import Quotes from './Components/Quotes/Quotes'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Title subTitle='Our Gallery' title='Some moments'/>
      <Gallery/>
      <Quotes/>
      <Title subTitle='Contact us' title='Get in Touch'/>
      <Contact/>
    </div>
  )
}

export default App
