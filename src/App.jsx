import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
 

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoutes />}>
        <Route path='/pokedex' element={<Pokedex />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App
