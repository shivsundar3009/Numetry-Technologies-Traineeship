import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './components/Login.jsx'
import Registration from './components/Registration.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element= {<App/>}/>
      <Route path='/login' element= {<Login/>}/>
      <Route path='/registration' element= {<Registration/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
 < RouterProvider router = {router} />
)
