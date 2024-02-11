"use client"
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Router from 'next/router'
function page() {

  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    const formdata = JSON.stringify(data)
    console.log(data)
    try {
      // Send the data to the server using Axios
      const response = await axios.post("/api/users/signup", formdata);
      console.log(response);
      Router.push("/login");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-96 h-96 rounded'>
      <form className='px-8 py-5 bg-gray-800 flex flex-col items-center shadow-lg rounded-lg' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='text-2xl font-bold p-2'>Sign up</h1>

    <input className='mt-2 p-3 w-72  bg-gray-600  text-gray-900 border-2 border-gray-700 focus:border-blue-600 focus:outline-none rounded' type="text" placeholder="Firstname" {...register("Firstname", { required: true })} />


    <input className='mt-2 p-3  bg-gray-600 w-72 rounded border-2 border-gray-700 focus:border-blue-600 focus:outline-none' type="text" placeholder="Lastname" {...register("Lastname", { required: true })} />


    <input className='mt-2 p-3  bg-gray-600 w-72 rounded border-2 border-gray-700 focus:border-blue-600 focus:outline-none' type="email" placeholder="Email" {...register("email", {
        required: true,
          pattern: /^\S+@\S+$/i
              } )} />

    <input className='mt-2 p-3  bg-gray-600 w-72 rounded border-2 border-gray-700 focus:border-blue-600 focus:outline-none' type="password" placeholder="Password" {...register("password", { required: true})} />


      <input className='mt-4 p-3 w-72 rounded bg-purple-600 hover:bg-purple-700' type='submit' />

      <p className='mt-4'>Already have an account? <Link className='text-purple-500 hover:text-purple-300' href="/login">Login</Link></p>
    </form>

     </div>
         
    </div>
  )
}

export default page
