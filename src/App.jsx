import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Title from './Components/Title/Title'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Title subTitle='Our Gallery' title='Some moments'/>
    </div>
  )
}

export default App
