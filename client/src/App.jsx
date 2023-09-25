import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingP/landing';
import HomePage from './components/home/home';
import GameDetail from './components/detailP/detail';

function App() {

  return (
    <div className="app">

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/detailPage' element={<GameDetail />} />
        <Route path="/home/:id" element={<GameDetail />} />

      </Routes> 
    </div>
  )
}

export default App
