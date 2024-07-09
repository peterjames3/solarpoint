import React from 'react'
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaCheckDouble } from "react-icons/fa6";
import OrderNow from "../Components/OrderNow"
import { GiSilverBullet } from "react-icons/gi";
import { AiOutlineGold } from "react-icons/ai";
import { TbSolarElectricity } from "react-icons/tb";
import AOS from 'aos'
import 'aos/dist/aos.css';


function SolarSystem() {
  return (
    <section  data-aos="fade-up"
    data-aos-duration="3000" className='max-w-[1400px] px-2 my-10 mx-auto flex flex-col'>
        <div className="text-center mb-7 text-slate-900 space-y-2 py-4">
            <h3 className='text-3xl font-medium'>Solar Home Systems</h3>
            <hr className="w-[12rem] mx-auto rounded-md  border-2 border-blue-700"/>
            <h4 className="text-4xl font-semibold">A System For  Every Need</h4>
        </div>
        <div className='w-full px-10 space-y-10 ss:px-20 grid grid-cols-1 grid-rows-4 ss:grid-rows-2 ss:grid-cols-1 ss:gap-4 sm:grid-cols-2 sm:place-items-center sm:space-y-0 sm:px-4 sm:gap-8 sm:grid-rows-2 md:gap-12 md:grid-rows-1  md:grid-cols-3 lg:grid-cols-4'>
            <div className='rounded-md flex flex-col shadow-xl shadow-black h-[55rem] ss:h-[56rem] sm:h-[55rem] ss:w-full sm:w-[20rem] md:max-w-[22rem] md:max-h-[55rem] overflow-hidden hover:scale-105 transform duration-300'>
              <nav className='h-[20rem] text-center '>
                <h5 className='solar-heading  font-medium font-Inter bg-blue-800 tracking-wider leading-tight px-7 sm:px-3 sm:py-9 ss:px-5 ss:py-12 font-poppins'>Starter solar home system <span className="font-semibold">-240W</span> Ksh 134,000</h5>
              </nav>
              <nav className='h-full flex flex-col space-y-10 items-center justify-center '>
                <span className='text-8xl text-yellow-900'><HiOutlineLightBulb /></span>
               <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> 10 Lights</nav>
               <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> TV and Radio</nav>
               <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> 1Phone Charging</nav>
               <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> Wif-Modem</nav>
               <OrderNow /> 
              </nav>
            </div>
            <div className='rounded-md flex flex-col shadow-xl shadow-black ss:h-[50rem] sm:h-[55rem] ss:w-full sm:w-[20rem] md:max-w-[22rem] md:h-[55rem] overflow-hidden hover:scale-105 transform duration-300'>
              <nav className='h-[20rem] text-center '>
                <h5 className=' solar-heading font-medium font-Inter bg-blue-800 tracking-wider leading-tight px-7 sm:px-3 sm:py-9 ss:px-5 ss:py-12 font-poppins'>Silver home solar system <span className="font-semibold">-1kW</span> Ksh 219,000</h5>
              </nav>
              <nav className='h-full flex flex-col space-y-10 items-center justify-center '>
                <span className='text-8xl text-yellow-900'><GiSilverBullet /></span>
               <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> 25 Lights</nav>
               <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> TV and Hifi</nav>
               <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> Fridge</nav>
               <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> Wif-Modern & phone charging</nav>
               <OrderNow /> 
              </nav>
            </div>
            <div className='rounded-md flex flex-col shadow-xl shadow-black ss:h-[50rem] sm:h-[55rem] ss:w-full sm:w-[20rem] md:max-w-[22rem] md:h-[55rem] overflow-hidden hover:scale-105 transform duration-300'>
              <nav className='h-[20rem] text-center '>
                <h5 className=' solar-heading font-medium font-Inter bg-blue-800 px-5 sm:py-9 ss:py-12 font-poppins leading-tight'>Gold solar home System <span className="font-semibold">-1.8kW</span> Ksh 283,000</h5>
              </nav>
              <nav className='h-full flex flex-col space-y-10 items-center justify-center '>
                <span className='text-8xl text-yellow-900'><AiOutlineGold /></span>
               <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> 30 Lights</nav>
               <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> TV and Home theatre</nav>
               <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> Phone Charging,  Iron box</nav>
               <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> Fridge and Microwave</nav>
               <OrderNow /> 
              </nav>
            </div>
            <div className='rounded-md flex flex-col shadow-xl shadow-black ss:h-[50rem] sm:h-[55rem] ss:w-full sm:w-[20rem] md:max-w-[22rem] md:h-[55rem] overflow-hidden hover:scale-105 transform duration-300'>
              <nav className='h-[20rem] text-center '>
                <h5 className='solar-heading font-medium font-Inter bg-blue-800 px-5 py-10 sm:py-9 ss:py-12 font-poppins leading-tight'>Platinum solar home system <span className="font-semibold">-3.6kW</span> Ksh 134,000</h5>
              </nav>
              <nav className='h-full flex flex-col space-y-7 items-center justify-center '>
                <span className='text-8xl text-yellow-900'><TbSolarElectricity />
</span>
               <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> 40 Lights</nav>
               <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> TV and Home thretre</nav>
               <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> Phone Charging , Iron box</nav>
               <nav className='flex flex-row gap-5 items-center text-xl text-slate-700' ><span className="text-blue-700"><FaCheckDouble /></span> Washing Machine</nav>
               <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"> <FaCheckDouble /></span>Frideg and Microwave</nav>
               <OrderNow /> 
              </nav>
            </div>
          
        </div>
      
    </section>
  )
}

export default SolarSystem
