import React from 'react'
import ReactDOM from 'react-dom/client'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import './index.css'
import Login from '../components/Login'

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element = {<Login/>}>
        <Route  />
   </Route> 
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
