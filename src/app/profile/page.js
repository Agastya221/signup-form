"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
    const Router = useRouter()
    const logout = async () => {
        console.log('button clicked')
        await axios.get('/api/users/logout')
        console.log('logged out')
        Router.push('/')
       
    }
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
     <h1 className='text-2xl font-bold flex flex-row items-center'>Hello from the <span className=' m-2 p-1.5  bg-orange-500 text-white'>profile page</span></h1>
      <button onClick={logout} className='bg-red-500 rounded m-2 p-2'>logout</button>
    </div>
  )
}

export default page
