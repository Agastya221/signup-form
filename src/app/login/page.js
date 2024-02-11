"use client"
import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function page() {
  const { register, handleSubmit } = useForm()
  const Router = useRouter()
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/users/login", data)
      console.log(response.data)
      
    } catch (error) {
      console.log(error)
    }
    
    Router.push("/")
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-96 h-96 rounded'>
        
      <form className='px-8 py-5 bg-gray-800 flex flex-col items-center shadow-lg rounded-lg' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='text-2xl font-bold p-2'>Login</h1>
    <input className='mt-2 p-3  bg-gray-600 w-72 rounded border-2 border-gray-700 focus:border-blue-600 focus:outline-none' type="email" placeholder="Email" {...register("email", {
        required: true,
          pattern: /^\S+@\S+$/i
              } )} />

    <input className='mt-2 p-3  bg-gray-600 w-72 rounded border-2 border-gray-700 focus:border-blue-600 focus:outline-none' type="password" placeholder="Password" {...register("password", { required: true})} />


      <input className='mt-4 p-3 w-72 rounded bg-purple-600 hover:bg-purple-700' type='submit' />

      <p className='mt-4'> Don't have an account? <Link className='text-purple-500 hover:text-purple-300' href="/signup">Signup</Link></p>
    </form>

     </div>
         
    </div>
  )
}

export default page
