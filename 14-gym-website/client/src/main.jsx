import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MerchendiseList from "./components/MerchendiseList.jsx"
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
     <Routes>
         <Route path="/" element={<App/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/login" element={<Login/>}/>
         {/* <Route path="/store" element={<MerchendiseList/>}/> */}
     </Routes>
   </BrowserRouter>
)
