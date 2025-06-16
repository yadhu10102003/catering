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

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home></Home> */}
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/log' element={<Login/>}></Route>
        <Route path='/reg' element={<Register/>}></Route>
        <Route path='/prod' element={<Products/>} ></Route>
        <Route path='/abt' element={<Aboutus/>} ></Route>
        
      </Routes>
    </>
  )
}

export default App
