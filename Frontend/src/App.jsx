import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import BiggPoster from './Components/BiggPoster'
import InStock from './Components/InStock'
import Crafted from './Components/Crafted'
import Trending from './Components/Trending'
import Appointment from './Components/Appointment'
import Footer from './Components/Footer'
import SmallIconSlider from './Components/SmallIconSlider'
import Home from './Pages/Home'
import NewItems from './Components/NewItems'
import AdminPage from './Pages/AdminPage'
import Login from './Pages/Login';
import FurniturePage from './Pages/FurniturePage';
import CartPage from './Pages/CartPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/admin' element={<AdminPage/>}/> 
          <Route path = '/furniture' element={<FurniturePage/>}/>
          <Route path = '/cart' element={<CartPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
