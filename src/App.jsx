import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './frontend/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register'

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
        <Route path='/prod'></Route>
        
      </Routes>
    </>
  )
}

export default App
