import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
import Navbar from './Components/Navbar'
import About from './Pages/About'

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route
      path='/'
      element = {<Home/>}
      />

           <Route
      path='/login'
      element = {<Login/>}
      />

           <Route
      path='/signup'
      element = {<Signup/>}
      />

           <Route
      path='/dashboard'
      element = {<Dashboard/>}
      />

          <Route
      path='/about'
      element = {<About/>}
      />
    </Routes>
    </>
  )
}

export default App
