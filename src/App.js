import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Latest from './pages/Latest.jsx'
import Layout from './pages/Layout.jsx'
import Saved from './pages/Saved.jsx'
import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Latest />} />
            <Route path='saved' element={<Saved />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
