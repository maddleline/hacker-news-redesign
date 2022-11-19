import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Latest from './pages/Latest.jsx'
import Layout from './pages/Layout.jsx'
import Starred from './pages/Starred.jsx'

const App = () => {
  return (
    <div className='App'>
      <h1>Hacker News</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Latest />} />
            <Route path='starred' element={<Starred />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
