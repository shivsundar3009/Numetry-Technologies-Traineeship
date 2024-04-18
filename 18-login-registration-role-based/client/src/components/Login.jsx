import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>

<div class="flex flex-wrap">
  <div class="flex w-full flex-col md:w-1/2">
    <div class="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
      <a href="#" class="border-b-gray-700 border-b-4 pb-2 text-2xl font-bold text-gray-900"> Damasus . </a>
    </div>
    <div class="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
      <p class="text-left text-3xl font-bold">Welcome back,</p>
      <p class="mt-2 text-left text-gray-500">Welcome back, please enter your details.</p>
      <form class="flex flex-col pt-3 md:pt-8">
        <div class="flex flex-col pt-4">
          <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
            <input type="email" id="login-email" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
          </div>
        </div>
        <div class="mb-12 flex flex-col pt-4">
          <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
            <input type="password" id="login-password" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" />
          </div>
        </div>
        <button type="submit" class="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Log in</button>
      </form>
      <div class="py-12 text-center">
        <p class="whitespace-nowrap text-gray-600">
          Don't have an account?
          <Link to="/"> SignUP Here !</Link>
        </p>
      </div>
    </div>
  </div>
  <div class="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
    <div class="absolute bottom-0 z-10 px-8 text-white opacity-100">
      <p class="mb-8 text-3xl font-semibold leading-10">We work 10x faster than our compeititors and stay consistant. While they're bogged won with techincal debt, we're realeasing new features.</p>
      <p class="mb-4 text-3xl font-semibold">John Elmond</p>
      <p class="">Founder, Emogue</p>
      <p class="mb-7 text-sm opacity-70">Web Design Agency</p>
    </div>
    <img class="-z-1 absolute top-0 h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
  </div>
</div>
    
    
    </>
  )
}

export default Login