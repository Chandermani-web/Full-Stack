import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Gallery = lazy(()=>import("./Components/Gallery.jsx"));
const Image = lazy(()=> import("./Page/Image.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <App />,
        children: [
          {
            path: "gallery",
            element: <Gallery />
          },
          {
            path: "gallery/:id",
            element: <Image />
          }
        ]
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} /> 
  </Suspense>
)
