import React from 'react'
import Renewable from "../assets/Renewable..webp";

function ContactHero() {
  return (
    <section className="w-full">
        <div className='relative w-full bg-gradient-to-r from-slate-600 to-gray-800 h-[30rem]  '>
     <img
          src={Renewable}
          alt=""
          className=" bg-cover bg-center flex-shrink-0 mix-blend-overlay h-full w-full"
        />
        <div className="absolute top-[50%] left-1/2 transition -translate-x-1/2 -translate-y-1/2 text-white px-5 flex items-center justify-between w-full md:max-w-[1400px] ">
            <div className="">
            <h1 className=" text-4xl md:text-5xl uppercase text-center font-semibold ">
            Contact Us
          </h1>
            </div>
         
          <div className="w-1/2">
          <h2 className="text-2xl font-medium text-center  hidden sm:flex">
          Reach out for inquiries, or to learn more about our services. Our team is ready to support your journey towards sustainability and innovation.
    
        
          </h2>
          </div>
       
        </div>
     </div>
    
      
    </section>
  )
}

export default ContactHero
