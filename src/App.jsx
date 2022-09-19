import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoIsFlo from './components/WhoIsFlo'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import WorkWithFlo from './components/WorkWithFlo'
import Footer from './components/Footer'
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <WhoIsFlo/>
    <Portfolio/>
    <Skills/>
    <WorkWithFlo/>
    <Footer/>
    </>
  )
}

export default App
