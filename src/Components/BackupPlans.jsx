import React from 'react'
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaCheckDouble } from "react-icons/fa6";
import OrderNow from "../Components/OrderNow"
import { GiSilverBullet } from "react-icons/gi";
import { AiOutlineGold } from "react-icons/ai";
import { TbSolarElectricity } from "react-icons/tb";
import AOS from 'aos'
import 'aos/dist/aos.css';

function BackupPlans() {
  return (
    <section data-aos="fade-up"
    data-aos-duration="1000" className='max-w-[1400px] px-2 my-10 mx-auto flex flex-col'>
    <div className="text-center text-slate-900 space-y-2 py-4">
        <h3 className='text-3xl font-medium'>Solar Home Systems</h3>
        <hr className="w-[12rem] mx-auto rounded-md  border-2 border-blue-700"/>
        <h4 className="text-4xl font-semibold">A System For  Every Need</h4>
    </div>
    <div className='w-full px-10 space-y-10 ss:px-20 grid grid-cols-1 grid-rows-4 ss:grid-rows-2 ss:grid-cols-1 ss:gap-4 sm:grid-cols-2 sm:place-items-center sm:space-y-0 sm:px-4 sm:gap-8 sm:grid-rows-2 md:gap-10 md:grid-rows-1  md:grid-cols-3 lg:gap-[10rem] lg:grid-cols-4'>
        <div className='rounded-md flex flex-col shadow-xl shadow-black h-[55rem] ss:h-[56rem] sm:h-[55rem] ss:w-full sm:w-[20rem] md:w-[22rem] md:h-[55rem] overflow-hidden hover:scale-105 transform duration-300'>
          <nav className='h-[20rem] text-center '>
            <h5 className='text-5xl text-white font-medium font-Inter bg-blue-800 tracking-wider leading-tight px-7 sm:px-3 sm:py-9 ss:px-5 ss:py-12 font-poppins'>Starter backup system <span className="font-semibold">Ksh. 50,500</span> </h5>
          </nav>
          <nav className='h-full flex flex-col space-y-10 items-center justify-center '>
            <span className='text-8xl text-blue-700'><HiOutlineLightBulb /></span>
            <div className='flex flex-col items-start space-y-7 space-x-12'>
           <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> Plug and play-6hrs backup time</nav>
           <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> Laptop</nav>
           <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> wifi modem</nav>
           <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> Phone Charging</nav>
           </div>
           <OrderNow /> 
          </nav>
        </div>
        <div className='rounded-md flex flex-col shadow-xl shadow-black ss:h-[50rem] sm:h-[55rem] ss:w-full sm:w-[20rem] md:w-[22rem] md:h-[55rem] overflow-hidden hover:scale-105 transform duration-300'>
          <nav className='h-[20rem] text-center '>
            <h5 className='text-5xl text-white font-medium font-Inter bg-blue-800 tracking-wider leading-tight px-7 md:px-5 sm:px-3 sm:py-9 ss:px-5 ss:py-12 font-poppins'>Medium backup  system <span className="font-semibold">Ksh. 112,000</span></h5>
          </nav>
          <nav className='h-full flex flex-col space-y-10 items-center justify-center '>
            <span className='text-8xl text-blue-700'><GiSilverBullet /></span>
            <div className='flex flex-col items-start space-y-7 space-x-12'>
           <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> 1000W inverter-12hrs backup time</nav>
           <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> 15 Lights</nav>
           <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> Computer/Tv</nav>
           <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> Wif-Modern & phone charging</nav>
           </div>
           <OrderNow /> 
          </nav>
        </div>
        <div className='rounded-md flex flex-col shadow-xl shadow-black ss:h-[50rem] sm:h-[55rem] ss:w-full sm:w-[20rem] md:w-[22rem] md:h-[55rem] overflow-hidden hover:scale-105 transform duration-300'>
          <nav className='h-[20rem] text-center '>
            <h5 className='text-5xl text-white font-medium font-Inter bg-blue-800 px-5 sm:py-9 ss:py-12 font-poppins leading-tight'>Maxi home  backup System <span className="font-semibold">Ksh. 139,000</span> </h5>
          </nav>
          <nav className='h-full flex flex-col space-y-10 items-center justify-center '>
            <span className='text-8xl text-blue-700'><AiOutlineGold /></span>
            <div className='flex flex-col items-start space-y-7 space-x-12'>
           <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> 1000W Inverter, 48000Watthrs-12hrs backup time</nav>
           <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> 30 Lights</nav>
           <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> Computer/ TV and  Fridge</nav>
           <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> wif-Modern & phone Charging </nav>
           </div>
           <OrderNow /> 
          </nav>
        </div>
        <div className='rounded-md flex flex-col shadow-xl shadow-black ss:h-[50rem] sm:h-[55rem] ss:w-full sm:w-[20rem] md:w-[22rem] md:h-[55rem] overflow-hidden hover:scale-105 transform duration-300'>
          <nav className='h-[20rem] text-center '>
            <h5 className='text-5xl text-white font-medium font-Inter bg-blue-800 px-5 py-10 sm:py-9 ss:py-12 font-poppins leading-tight'>5000W backup system <span className="font-semibold">Ksh. 449,000</span></h5>
          </nav>
          <nav className='h-full flex flex-col space-y-7  items-center justify-center '>
            <span className='text-8xl text-blue-700 text-center'><TbSolarElectricity />
</span>
            <div className='flex flex-col items-start space-y-7 space-x-12'>
           <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> 500W Inverter, 19,200 Watthrs-8hrs backuo time</nav>
           <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> 10 Lights</nav>
           <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"><FaCheckDouble /></span> 8 computers</nav>
           <nav className='flex flex-row gap-5 items-center text-xl text-slate-700' ><span className="text-blue-700"><FaCheckDouble /></span> 1 Printer</nav>
           <nav className='flex flex-row gap-5 items-center text-xl text-slate-700'><span className="text-blue-700"> <FaCheckDouble /></span>1 Copier</nav>
           </div>
           <OrderNow /> 
          </nav>
        </div>
      
    </div>
  
</section>
)

}

export default BackupPlans
