import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import './app.css'  
import List from './pages/List'
import Return from './pages/Return'
import ReturnList from './pages/ReturnList'
import Stock from './pages/Stock'
import Reprint from './pages/Reprint'
import Change from './pages/Change'

export const server = 'http://localhost:4000/api/v1';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<List />} />
        <Route path='/return' element={<Return />} />
        <Route path='/returnlist' element={<ReturnList />} />
        <Route path='/stock' element={<Stock />} />
        <Route path='/reprint' element={<Reprint />} />
        <Route path='/change' element={<Change />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App