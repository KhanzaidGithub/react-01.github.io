import React from 'react'
import './App.css'
import Navbar from './comonents/nav-comp/Navbar'
import Home from './comonents/Pages/home'
import About from './comonents/Pages/About'
import Contact from './comonents/Pages/Contact'
import Services from './comonents/Pages/Services'
import Footer from './comonents/Footer-comp/Footer'
import { Routes,Route } from 'react-router-dom'






function App() {
  return (
    <>
    
    
    <Navbar/>
    
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Services' element={<Services/>}></Route>
    </Routes>

    <Footer/>
    
    </>
  )
}

export default App
