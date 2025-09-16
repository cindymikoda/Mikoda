import { useState } from 'react'
import './App.css'
import About from './components/About'
import Info from './components/Info'
import Interests from './components/Interests'
import Social from './components/Social'

function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interests />
      <Social />
    </div>
  )
}

export default App
