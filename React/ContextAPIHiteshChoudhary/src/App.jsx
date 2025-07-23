import React from 'react'
import UserContextProvider from './Contexts/UserContextProvider.jsx'
import Login from './Components/Login.jsx'
import Profile from './Components/Profile.jsx'
const App = () => {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
