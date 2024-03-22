import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Title from './Components/Title/Title'
import Gallery from './Components/Gallery/Gallery'
import Quotes from './Components/Quotes/Quotes'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Quotes/>
      <Title subTitle='Our Gallery' title='Some moments'/>
      <Gallery/>
      <Title subTitle='Contact us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
