import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createRoutesFromElements , createBrowserRouter} from 'react-router-dom'
import { RegistrationPage, LoginPage , ForgetPage ,ForgetVerfication } from './components/index.js'
import App from './App.jsx'
import './index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path='/' element = {<RegistrationPage/>}/>
      <Route path='/login' element = {<LoginPage/>}/>
      <Route path='/forget' element = {<ForgetPage/>}/>
      <Route path='/verification' element = {<ForgetVerfication/>}/>
      <Route path='/app' element = {<App/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router = {router}/>
  
  
)
