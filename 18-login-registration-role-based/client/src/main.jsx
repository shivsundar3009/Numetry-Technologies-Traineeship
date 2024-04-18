import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {SignUP, Login} from "./components"

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  
 
 <Routes>
   
   <Route path='/' element={<SignUP/>}/>
   <Route path='/login' element={<Login/>}/>

 </Routes>
  

     
 
 </BrowserRouter>
)
