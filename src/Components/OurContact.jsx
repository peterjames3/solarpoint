import React from 'react'
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import AOS from 'aos'
import 'aos/dist/aos.css';
function OurContact() {
  return (
    <section data-aos="fade-up"
    data-aos-duration="200" className='max-w-6xl space-y-5 my-20 bg-blue-900 mx-auto p-10 rounded-sm shadow-md shadow-black' >
      <h4 className="text-3xl font-semibold font-Inter text-white">Head office</h4>
      <div className='flex w-full flex-col cursor-pointer space-y-6'>
      <div className='flex gap-4'>
       <nav className='text-white font-semibold text-2xl'> <FaMapMarkedAlt /></nav>
       <nav className=' text-white'>Apple wood,Adams Building, Ngong Road</nav>
      </div>
      <div className='flex gap-4'>
        <nav className='text-2xl font-semibold text-white'><FaPhone /></nav>
        <nav className=' text-white'> 0712741650 | 0703704062</nav>
      </div>
      <div className='flex gap-4'>
        <nav className='text-2xl text-white font-semibold'><MdMarkEmailRead /></nav>
        <nav className='text-white '>solarpointsystems1@gmail.com</nav>
      </div>
      

      </div>
    </section>
  )
}

export default OurContact
