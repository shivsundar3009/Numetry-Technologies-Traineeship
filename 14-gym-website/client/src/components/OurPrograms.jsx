import React from 'react'
import p1 from "../assets/p1.jpg"
import p2 from "../assets/p2.jpg"
import p3 from "../assets/p3.jpg"
import bg from "../assets/bg.jpg"

function OurPrograms() {
  return (
    <div>
        

        <div style={{backgroundImage: `url(${bg})`}} className='flex flex-col items-center p-10 gap-10'>
          
          <div className='flex flex-col justify-center items-center w-1/2 gap-4'>
            <h2 className='text-5xl font-semibold'>Our Programs</h2>
            <p>
            The diverse range of programs, from group exercises, corporate training to personalized training, caters to varying fitness levels and goals. Members get variety and the option of customization as each gym offers a diversity of exercise options and specialized programs, allowing members to choose activities that align with their interests and fitness objectives. Personalized training programs ensure workouts are tailored to individual needs, maximizing results. Participating in group exercises fosters a sense of community among members, providing social support and encouragement, which can be instrumental in maintaining consistency in their fitness journey.
            </p>
          </div>

          <div className='flex justify-center'>
        
           <div>
                <img src={p1} alt="" className='' />
           </div>

           <div className='w-1/2 flex flex-col justify-center items-center gap-10'>
            <h2 className='text-3xl font-semibold'>Corporate Membership</h2>

            <p className='w-5/6'>
            Don’t have time to go to the gym? We get the gym to you. Gold's Gym India offers corporate membership programs tailored for companies looking to promote employee wellness and fitness. These programs are designed to encourage a healthier workforce by providing BMI screening, diet and nutrition counselling, fitness activities and seminars for building a healthier lifestyle.
            </p>
           </div>


          </div>

          <div className='flex flex-row-reverse justify-center'>
        
           <div>
                <img src={p2} alt="" />
           </div>

           <div className='w-1/2 flex flex-col justify-center items-center gap-10'>
            <h2 className='text-3xl font-semibold'>Personal Training</h2>

            <p className='w-5/6'>
            Gold's Gym India is known for the competent personal trainers and extraordinary personal training offered by them. The individuals seeking for serious goal-oriented fitness, personalized guidance, motivation, and specialized workout plans, Gold’s Gym India personal training program is for them.
            </p>
           </div>


          </div>

          <div className='flex justify-center'>
        
           <div>
                <img src={p3} alt="" />
           </div>

           <div className='w-1/2 flex flex-col justify-center items-center gap-10'>
            <h2 className='text-3xl font-semibold'>Group Program</h2>

            <p className='w-5/6'>
            Gold's Gym India provides a variety of group fitness programs such as dance fitness, yoga, HIIT, and much more tailored to cater to diverse fitness preferences and goals. These group programs offer a supportive environment and a sense of community while engaging participants in fun and effective workouts.
            </p>
           </div>


          </div>



        </div>




    </div>
  )
}

export default OurPrograms