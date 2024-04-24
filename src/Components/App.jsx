import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import TopNav from './TopNav'
import Error404 from './Error404'
export default function App() {
  return (
    <BrowserRouter>
    <TopNav/>
    <Navbar/>
   <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/about' element={<About />} />
   <Route path='/contact' element={<Contact />} />
   <Route path='/*' element={<Error404 />} />
   </Routes>

     <Footer/>
    </BrowserRouter>
  )
}
