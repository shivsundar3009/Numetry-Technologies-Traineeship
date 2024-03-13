import React from 'react'
import Header from './Header'
import img from '../assets/Banner/Banner-3.jpg'

function Book() {
  return (
    <>
    <Header/>
    <div className='h-screen'>
    <div className="h-3/5 flex justify-center items-center" style={{backgroundImage: `url(${img})`}}>
        <div className='h-4/5 rounded-xl w-1/2 bg-white p-10'>

            <div className='flex-col flex gap-3'>

            <h1 className='text-3xl text-center'>Fill The Booking Details</h1>

            <div>
              <div className='flex gap-2 border-4 p-2 w-1/2'>
                <label htmlFor="checkIN">Check In</label>
                <input type="date" name="" id="" />
              </div>
            </div>

            <div>
              <div className='flex gap-2 border-4 p-2 w-1/2'>
                <label htmlFor="checkOUT">Check OUT</label>
                <input type="date" name="" id="" />
              </div>
            </div>

            <div>
              <label htmlFor="Meal">Meal Preferance</label>
              <select name="None" id="Meal" required>
  <option value="">None</option>
  <option value="Breakfast">Breakfast</option>
  <option value="Lunch">Lunch</option>
  <option value="Dinner">Dinner</option>
  <option value="Breakfast & Lunch">Breakfast & Lunch</option>
  <option value="Breakfast & Dinner">Breakfast & Dinner</option>
  <option value="Lunch & Dinner">Lunch & Dinner</option>
  <option value="Breakfast & Lunch & Dinner">Breakfast & Lunch & Dinner</option>
</select>
            </div>

            </div>
        </div>
    </div> 
    </div>
    
    </>
  )
}

export default Book