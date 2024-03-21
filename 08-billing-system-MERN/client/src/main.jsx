import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home , Cart} from './components'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
         <Route path ='/' element ={ <Home/> }/>
         <Route path ='/cart' element ={ <Cart/> }/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
