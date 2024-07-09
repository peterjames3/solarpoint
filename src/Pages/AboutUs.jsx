import SolarPanel from "../assets/carousel-2..webp";
import Green from "../assets/green..webp";
import factory from "../assets/img-600x400-6..webp";
import { GiGreenPower } from "react-icons/gi";
import { CiCircleCheck } from "react-icons/ci";
import { TbSolarPanel2 } from "react-icons/tb";
import { TbBuildingFactory } from "react-icons/tb";
import AboutUsHero from "../Components/AboutUsHero";
import OurCoreService from "../Components/OurCoreService";
import Mission from "../Components/Mission";
import CompletedProject from "../Components/CompletedProject";
import AOS from "aos";
import "aos/dist/aos.css";
import OurAchievements from "../Components/OurAchievements";
import { motion } from "framer-motion";
import React, { useEffect } from 'react'
import  { useLocation } from 'react-router-dom'

function Aboutus() {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [location])
  
  return (
    <motion.section
      className="w-full  my-20 mx-auto  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AboutUsHero />
      <OurCoreService />
      <Mission />
      <CompletedProject />
      <OurAchievements />

      <nav
        data-aos="fade-up"
        data-aos-duration="3000"
        className="w-full space-y-8 "
      >
        <h2 className="text-4xl font-semibold text-center text-black py-7">
          {" "}
          Leading the Charge in Solar & Renewable Energy
        </h2>
      </nav>
      <div className=" max-w-[1400px]  mx-auto flex flex-col xs:flex-col ss:flex-row-wrap flex-shrink-0 gap-5 md:flex-row md:gap-3 mt-7  min-h-[40rem] md:min-h-[22rem]">
        <div className="space-y-12 ss:space-y-5 h-[28rem] md:h-[26.7rem] pb-2 px-2 w-full md:w-[35%] pt-2 text-white text-center rounded-md shadow-lg bg-white dark:bg-gray-800 hover:scale-100 transition-all delay-300 border-y-4 border-green-700">
          <h4 className="text-2xl font-semibold font-Inter pt-5">
            Committed to Quality & Sustainability
          </h4>
          <p className="font-medium text-xl">
            With over two decades of experience, our mission remains to empower
            communities and businesses by providing top-tier renewable energy
            solutions that ensure a sustainable future for all.
          </p>

          <div className="flex flex-row items-center justify-center font-Roboto uppercase gap-5">
            <p className="text-white font-bold text-5xl">3+</p>
            <p className="text-blue-700 font-semibold">Years Experience </p>
          </div>
        </div>

        <div
          className="flex-grow rounded-md overflow-hidden 
    w-full md:w-[32%] relative bg-gradient-to-r from-slate-800 to-gray-500 h-[26.2rem] md:h-[26.7rem]"
        >
          <img
            src={factory}
            alt="man working"
            loading="lazy"
            className="w-full h-full object-cover mix-blend-overlay"
          />

          <div class="absolute space-y-5 bg-gray-800 text-white top-[60%] left-[50%] transform[-translate-x-1/2] text-center pt-3 cursor-pointer hover:top-0 hover:left-0 w-full h-full transition-all duration-500 ease-in-out hover:translate-y-0 hover:scale-100 pb-6">
            {" "}
            <nav className=" flex justify-center text-7xl text-yellow-800">
              <TbBuildingFactory />
            </nav>
            <h4 className="text-xl font-semibold font-Inter underline underline-offset-2 text-blue-700">
              Manufacturing
            </h4>
            <p className="font-medium">
              Solar energy offers immense benefits to the manufacturing sector,
              from powering various systems to running farm equipment. Our solar
              solutions for agriculture help farmers and agribusinesses:
            </p>
            <div className=" flex flex-col px-6 text-start text-green-600">
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Reduce energy costs</span>
              </div>
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Increase productivity,</span>
              </div>
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Contribute to a cleaner environment.</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex-grow rounded-md overflow-hidden 
    w-full md:w-[32%] relative bg-gradient-to-r from-slate-800 to-gray-500 h-[26.2rem] md:h-[26.7rem]"
        >
          <img
            src={Green}
            alt="man working"
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div class="absolute space-y-5 bg-gray-800 text-white top-[60%] left-[50%] transform[-translate-x-1/2] text-center pt-3 cursor-pointer hover:top-0 hover:left-0 w-full h-full transition-all duration-500 ease-in-out hover:translate-y-0 hover:scale-100 pb-6">
            <nav className=" flex justify-center text-7xl text-yellow-800">
              <GiGreenPower />
            </nav>
            <h4 className="text-xl font-semibold font-Inter underline underline-offset-2 text-blue-700">
              The Greenhouse Effect
            </h4>
            <p className="font-medium">
              Solar energy offers immense benefits to the agricultural sector,
              from powering irrigation systems to running farm equipment. Our
              solar solutions for agriculture help farmers and agribusinesses:
            </p>
            <div className=" flex flex-col px-6 text-start text-green-600">
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Reduce energy costs</span>
              </div>
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Increase productivity,</span>
              </div>
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Contribute to a cleaner environment.</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex-grow rounded-md overflow-hidden 
    w-full md:w-[32%] relative bg-gradient-to-r from-slate-800 to-gray-500  h-[28.7rem] md:h-[26.7rem]"
        >
          <img
            src={SolarPanel}
            alt="man working"
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div class="absolute space-y-5 bg-gray-800 text-white top-[60%] left-[50%] transform[-translate-x-1/2] text-center pt-3 cursor-pointer hover:top-0 hover:left-0 w-full h-full transition-all duration-500 ease-in-out hover:translate-y-0 hover:scale-100 pb-6">
            <nav className=" flex justify-center text-7xl text-yellow-800">
              <TbSolarPanel2 />
            </nav>
            <h4 className="text-xl font-semibold font-Inter underline text-blue-700">
              Solar Panels
            </h4>
            <p className="font-medium">
              Solar panels are a cornerstone of renewable energy technology,
              allowing for the direct conversion of sunlight into electricity.
              They play a crucial role in the global shift towards sustainable
              energy sources, offering a clean. fossil fuels. They different
              types including:
            </p>
            <div className=" flex flex-col px-6 text-start text-green-600 space-y-4">
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Monocrystalline Solar Panels</span>
              </div>
              <div className="flex flex-row items-center">
                <span className="px-2">
                  <CiCircleCheck aria-label="Feature checked" />
                </span>
                <span>Polycrystalline Solar Panels</span>
              </div>
            </div>
          </div>
          <div
            className="flex-grow rounded-md overflow-hidden 
    w-full md:w-[32%] relative bg-gradient-to-r from-slate-800 to-gray-500  h-[28.7rem] md:h-[22.5rem]"
          >
            <img
              src={SolarPanel}
              alt="man working"
              className="w-full h-full object-cover mix-blend-overlay"
            />
            <div className="absolute space-y-5 bg-gray-800 text-white top-[60%] text-center pt-3 cursor-pointer hover:top-[0%] hover:height-[100%] transition-all delay-600 hover:-traslate-y-60  hover:scale-100 pb-6">
              <nav className=" flex justify-center text-7xl text-yellow-800">
                <TbSolarPanel2 />
              </nav>
              <h4 className="text-xl font-semibold font-Inter underline">
                Solar Panels
              </h4>
              <p className="font-medium">
                Solar panels are a cornerstone of renewable energy technology,
                allowing for the direct conversion of sunlight into electricity.
                They play a crucial role in the global shift towards sustainable
                energy sources, offering a clean. fossil fuels. They include:
              </p>
              <div className=" flex flex-col px-6 text-start text-green-600">
                <div className="flex flex-row items-center">
                  <span className="px-2">
                    <CiCircleCheck aria-label="Feature checked" />
                  </span>
                  <span>Monocrystalline Solar Panels</span>
                </div>
                <div className="flex flex-row items-center">
                  <span className="px-2">
                    <CiCircleCheck aria-label="Feature checked" />
                  </span>
                  <span>Polycrystalline Solar Panels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Aboutus;
