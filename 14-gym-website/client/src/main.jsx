import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MerchendiseList from "./components/MerchendiseList.jsx"
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import ContactForm from './components/ContactForm.jsx'
import AdminComponent from './components/AdminComponent.jsx'
import User from './components/User.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
     <Routes>
         <Route path="/" element={<App/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/contact" element={<ContactForm/>}/>
         <Route path="/admin" element={<AdminComponent/>}/>
         <Route path="/user" element={<User/>}/>
         {/* <Route path="/store" element={<MerchendiseList/>}/> */}
     </Routes>
   </BrowserRouter>
)
