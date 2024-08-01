import React from 'react'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'
import Cards from './Cards'
function Course() {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md-auto md:px-20 px-4'>
<div className='mt-28 items-center justify-center text-center'>
  <h1 className='text-2xl md:text-4xl '>We're delighted to have you{" "}
  <span className="text-pink-500"> Here! :)</span></h1>
  <p className='mt-12'>
  Explore our diverse range of courses designed to cater to your educational and professional needs. From foundational subjects to advanced specializations, our expertly crafted courses offer a blend of theoretical knowledge and practical skills. Whether you're looking to advance your career, learn a new hobby, or gain certification, our courses provide the resources and support you need to succeed. Enroll now and embark on a transformative learning journey with us.</p>
  <Link to="/">
  <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 mt-6'>Back</button>
  </Link>
</div>
<div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
  {
list.map((item)=>(
  <Cards key={item.id} item={item}/>
))
  }
</div>
   </div>

   </>
  )
}

export default Course