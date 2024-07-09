import WaterPumpHero from "../Components/WaterPumpHero"
import WaterPumpmain from "../Components/WaterPumpmain"
import { FaGoogleWallet } from "react-icons/fa6";
import { GrInstallOption } from "react-icons/gr";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdOutlineCo2 } from "react-icons/md";
import lorentzwaterpump from "../assets/lorentzwaterpump..webp"
import groundfos from "../assets/grundfoswaterpump..webp"
import roomnypumpwaterpump from "../assets/roomnypumpwaterpump..webp"
import roomnypumpwaterpump1 from "../assets/roomnypumpwaterpump1..webp"
import { motion } from "framer-motion"
function SolarWaterPump() {
  return (
    <motion.section className="h-auto w-full"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <WaterPumpHero /> 
      <WaterPumpmain />
      <section   data-aos="fade-up"
      data-aos-duration="3000" className="w-full ss:mt-[10rem] sm:mt-[5rem] py-7 px-10 bg-slate-400 ">
        <div className="w-full pb-4 flex flex-col items-center space-y-3">
          <h3 className="text-center text-3xl text-black font-Poppins font-semibold pt-9">
            Types of Solar Pump
          </h3>
          <hr className="w-[10rem] border-b-[3px] rounded border-blue-700" />
          <h4 className="text-center text-4xl font-bold">
            We deal in various solar pumps both submersible and surface pumps
          </h4>
        </div>

        <div className="max-w-7xl grid grid-rows-4 grid-cols-1 xs:grid-col-2 xs:grid-rows-2 ss:grid-cols-2 ss:grid-rows-2  md:grid-rows-1 md:grid-cols-4 gap-3 my-2 mx-auto">
          <div className="rounded-sm shadow-md shadow-slate-800 text-center items-center flex flex-col px-2 bg-white 
          sm:min-h-[30rem] py-5">
            <div className="h-[40%] w-full flex items-center justify-center">
              <img src={groundfos} loading="lazy" alt="grundfos img" className="object-fit bg-center w-full h-full" />
            </div>
            <div className="h-[60%] w-full text-center space-y-2">
              <h5 className="text-2xl uppercase font-medium text-black">
                Grundfos solar water pump
              </h5>
              <nav className="w-full flex space-x-2 flex-col items-start">
              <p className="text-xl">. Flow rate, Q: max. 90 m3/h</p>
              <p className="text-xl">. Maximum Flow rate of 2,750 litres/hr</p>
              <p className="text-xl">. Height, H: Max. 120m</p>
              <p className="text-xl">. Voltage: 30-300 VDC</p>
              </nav>
            </div>
          </div>
          <div className="rounded-sm shadow-md shadow-slate-800 text-center items-center flex flex-col px-2 bg-white">
            <div className="h-[40%] w-full flex items-center justify-center overflow-hidden">
            <img src={lorentzwaterpump} loading="lazy" alt="lorentzwaterpump img" className="object-fit bg-center w-full h-full" />
            </div>
            <div className="h-[60%] w-full text-center space-y-2">
            <nav className="w-full flex space-x-2 flex-col items-start">
              <h5 className="text-2xl uppercase font-medium">LORENTZ SOLAR PUMPS </h5>
              <p className="text-xl">. Flow rate, Q: max. 90 m3/h</p>
              <p className="text-xl">. Maximum Flow rate of 2,750 litres/hr</p>
              <p className="text-xl">. Height, H: Max. 120m</p>
              <p className="text-xl">. Voltage: 30-300 VDC</p>
              </nav>
            </div>
          </div>
          <div className="rounded-sm shadow-md overflow-y-auto shadow-slate-800 text-center items-center flex flex-col px-2 bg-white">
            <div className="h-[40%] w-full flex items-center justify-center overflow-hidden">
            <img src={roomnypumpwaterpump}loading="lazy"  alt="roomnypumpwaterpump img" className="object-fit bg-center w-full h-full" />
            </div>
            <div className="h-[60%] w-full text-center space-y-2">
              <h5 className="text-2xl uppercase font-medium">
              PEDROLO WATER PUMP 
              </h5>
              <nav className="w-full flex space-x-2 flex-col items-start">
              <p className="text-xl">. Maximum head is 65M/215 feet </p>
              <p className="text-xl">. Maximum Flow rate of 3,000 litres/hr </p>
              <p className="text-xl">. Optimised irrigation solution for upto 3 acre farm</p>
              <p className="text-xl ">. Includes: Submersible pump,50M electric cable, ontroller,310W solar panel,50M HDPE pipe and fittings</p>
              </nav>
            </div>
          </div>
          <div className="rounded-sm shadow-md overflow-y-auto shadow-slate-800 text-center items-center flex flex-col px-2 bg-white">
            <div className="h-[40%] w-full flex items-center justify-center overflow-hidden">
            <img src={roomnypumpwaterpump1} loading="lazy" alt="roomnypumpwaterpump1 img" className="object-fit bg-center w-full h-full" />
            </div>
            <div className="h-[60%] w-full text-center space-y-2">
              <h5 className="text-2xl uppercase font-medium">
              ROOMNY SOLAR WATER PUMP1 
              </h5>
              <nav className="w-full flex space-x-2 flex-col items-start">
              <p className="text-xl">. Maximum head is 30M/100 feet </p>
              <p className="text-xl">. Maximum Flow rate of 1,100 liters/hr </p>
              <p className="text-xl">. Optimised irrigation solution for upto 3 acre farm</p>
              <p className="text-xl ">. Includes: Submersible pump,50M electric cable, controller,2 X 310W solar panel,50M HDPE pipe and fitting</p>
              </nav>
           
              
            </div>
          </div>
        </div>
      </section>
    </motion.section>
)
  
}

export default SolarWaterPump
