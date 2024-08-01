import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
function Contact() {
  return (
    <>
    <div className='flex h-screen items-center justify-center  flex-col space-y-4 border bg-orange-100'>
       <div>

        <div className='flex items-center justify-center  px-1 py-2'> 
            <span className='font-semibold  '>contact with </span>
                <a href='' className='px-1 py-2 '><FaLinkedin size={30} color='blue' /></a>
                <a href='' className='px-1 py-2'> <FaGithub size={30} /></a>
                <a href='' className='px-1 py-2'><FaTelegram  size={30} color='#229ED9'/></a>

        </div>
        
    <hr/>
         
        
          <div className=' border w-96 flex items-center justify-center '>
         
           <form  className=' ml-5 py-5'>
            <label >Name:</label><br/>
            <input type='text' placeholder='enter your name' className='border w-80 px-4 h-10 rounded-md '/><br/><br/>
            <label>Email:</label><br/>
            <input type='email' placeholder='enter your email' className='border w-80 px-4 h-10 rounded-md '/><br/><br/>
            <label>Phone Number:</label><br/>
            <input type='number' placeholder='enter your phone number ' className='border w-80 px-4 h-10 rounded-md '/><br/><br/>
            
           </form>
          </div>
          </div>

    </div>
    </>
  )
}

export default Contact