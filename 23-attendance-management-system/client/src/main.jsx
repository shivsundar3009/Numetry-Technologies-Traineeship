import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Login , SignUP } from "./components"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element= {<Login/>}/>
      <Route path='/SignUP' element= {<SignUP/>}/>
   </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={router} />
)
