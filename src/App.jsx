import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {HashRouter as Router, Routes, Route } from 'react-router-dom';
import LANDING from './components/LANDING'
import PORTFOLIOPAGE from './components/PORTFOLIOPAGE'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LANDING />}/>
        <Route path="/portfolio" element={<PORTFOLIOPAGE />} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default App
