import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddPage from './pages/AddPage'
import EditPage from './pages/EditPage'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add' element={<AddPage />} />
        <Route path='/edit' element={<EditPage />} />
     </Routes>
    </>
  )
}

export default App
