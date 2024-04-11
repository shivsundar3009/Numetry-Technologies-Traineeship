import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { CreateNote } from './components'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
  <Routes>
         <Route path="/" element={<App/>}/>
         <Route path="/create" element={<CreateNote/>}/>
     </Routes>
  </BrowserRouter>

)
