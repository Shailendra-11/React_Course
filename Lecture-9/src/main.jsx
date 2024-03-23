import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './Compnents/Contact.jsx'
import About from './Compnents/About.jsx'
import Home from './Compnents/Home.jsx'


const Router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,  
      errorElement: <Error />,
      children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/About",
                element:<About/>
            },
            {
                path:"/Contact",
                element:<Contact/>
            },
      ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider  router={Router} />
      
)
