import React from 'react'
import Sidebar from './components/Sidebar'
import bg from "./assets/bg.jpg"

function App() {
  return (

    <>


    <div style={{backgroundImage : `url(${bg})` }} className='text-white'>
    
    <Sidebar/>

    </div>
    
    

    </>
  )
}

export default App