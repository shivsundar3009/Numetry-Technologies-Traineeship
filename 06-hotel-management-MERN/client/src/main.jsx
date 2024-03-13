import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import {About, Book, Service, Contact, Login, Register} from './components'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements , RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
       <Route path='/' element= {<Home/>}/>
       <Route path='/about' element= {<About/>}/>
       <Route path='/book' element= {<Book/>}/>
       <Route path='/service' element= {<Service/>}/>
       <Route path='/contact' element= {<Contact/>}/>
       <Route path='/login' element= {<Login/>}/>
       <Route path='/register' element= {<Register/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
