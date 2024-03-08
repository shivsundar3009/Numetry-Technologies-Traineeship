import img from '../src/assets/registration.jpg'
function Registration() {


  return (
     <div className='h-screen bg-blue-700' >

    <div className=' bg-cover flex justify-center items-center' >

      <div className='bg-slate-200 w-1/2 h-1/2 flex flex-col p-6'>
        <h2 className='text-center bg-blue-400 text-white font-bold cursor-pointer p-2 text-3xl' >Add User</h2>

        <div className='flex flex-col p-2 gap-1'>
          <label htmlFor="userName">Enter Your Name</label>

          <input type="text" placeholder='Enter your Name' id='userName' className='w-1/2 p-2'/>
        </div>

        <div className='flex flex-col p-2 gap-1'>
          <label htmlFor="Email">Enter Your Email</label>

          <input type="email" placeholder='Enter Your Email' id='Email' className='w-1/2 p-2'/>
        </div>

        <div className='flex flex-col p-2 gap-1'>
          <label htmlFor="Age">Age</label>

          <input type="number" placeholder='Age' id='Age' className='w-1/2 p-2'/>
        </div>
      </div>



    </div>

     </div>

  )
}

export default Registration