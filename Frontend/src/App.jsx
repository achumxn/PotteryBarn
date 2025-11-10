import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import BiggPoster from './Components/BiggPoster'
import InStock from './Components/InStock'
import Crafted from './Components/Crafted'
import Trending from './Components/Trending'
import Appointment from './Components/Appointment'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <BiggPoster/>
      <InStock/>
      <Crafted/>
      <Trending/>
      <Appointment/>
      <Footer/>
    </>
  )
}

export default App
