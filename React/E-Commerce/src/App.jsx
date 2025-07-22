import React from 'react'
import Navbar from './Utils/Others/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './Utils/Others/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App