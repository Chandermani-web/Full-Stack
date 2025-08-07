import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import { Suspense } from 'react'

const Signup = lazy(()=>import("./Components/Signup.jsx"));
const Login = lazy(()=>import("./Components/Login.jsx"));
const Home = lazy(()=>import('./Components/Home.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '',
        element: <Signup />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "home",
        element: <Home />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div className='flex justify-center items-center h-screen'><h1 className='text-3xl'>loading...</h1></div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
