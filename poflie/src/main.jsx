import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Project from './pages/Project.jsx'
import About from './pages/About.jsx'


let navrout = createBrowserRouter(
  [
    {
      path : '/',
      element : <Home/>
    },
    {
     path : 'About-us',
     element : <About/>
    },
    {
      path : '/project',
      element : <Project/>
    },
     {
    path : 'contact-us',
    element : <Contact/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={navrout}></RouterProvider>
  </StrictMode>,
)
