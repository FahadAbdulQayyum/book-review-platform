import { useState } from 'react'
import './App.css'
import Home from './components/home'
import Login from './components/login'
import Navbar from './components/navbar'

function App() {

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Login />
    </>
  )
}

export default App
