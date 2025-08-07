import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
const Home = () => {
    const location = useLocation();
    const { username, email } = location.state || {};
    const navigate = useNavigate(); 
    const handlebutton = () => {
      navigate("/");
    }
  return (
    <div className='h-screen bg-black text-white text-3xl flex flex-col justify-center items-center gap-5 overflow-x-hidden relative'>
      <button className='absolute top-10 left-10 text-sm bg-white text-black p-2 rounded-2xl font-semibold ri-arrow-left-line' onClick={handlebutton}>Back to Signup</button>
      <h1 className='font-semibold'>Welcome <strong className='text-blue-500 capitalize italic'>{username}</strong></h1>
      <p className='text-gray-600 text-xl'>You are logged from <span className='text-green-300 italic underline underline-offset-8 decoration-2 decoration-red-700'>{email}</span></p>
    </div>
  )
}

export default Home
