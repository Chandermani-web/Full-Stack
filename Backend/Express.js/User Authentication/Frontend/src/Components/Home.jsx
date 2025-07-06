import React, { useEffect, useState } from 'react'

const Home = () => {
  const [loggedin, setloggedin] = useState("")

  useEffect(()=>{
    setloggedin(localStorage.getItem("LoggedIn user"));
  },[]);
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Awesome Auth App</h1>
      <p className="home-desc">Experience a modern, dark-themed authentication UI built with React.</p>
      <button className='logout'>Logout</button>
    </div>
  )
}

export default Home
