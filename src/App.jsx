import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './frontend/Home'
import Login from './frontend/Login'
import Navbar from './frontend/Navbar'
import { Route, Routes } from 'react-router-dom'
import Register from './frontend/Register'
import Products from './frontend/Products'
import Aboutus from './frontend/Aboutus'
import Footer from './frontend/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div style={{paddingBottom:"50px"}}>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/log' element={<Login/>}></Route>
        <Route path='/reg' element={<Register/>}></Route>
        <Route path='/prod' element={<Products/>} ></Route>
        <Route path='/abt' element={<Aboutus/>} ></Route>
      </Routes>
    </div>
    <div style={{paddingTop:"50px"}}> 
        <Footer></Footer>
    </div>
      
    </>
  )
}

export default App
