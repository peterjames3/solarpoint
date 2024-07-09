import React from "react";
import SolarDesign from "../assets/PanelsWork_..webp";
import solarSVG from "../assets/solar-panel..webp";
import solarEnergy from "../assets/solar-energy..webp";
import waterHeater from "../assets/s_waterheater..webp";
import Powergeneration from "../assets/power-generation..webp";
import Bulb from "../assets/bulb..webp";
import Pump from "../assets/pump..webp";
import AOS from "aos";
import "aos/dist/aos.css";


function OurSolutions() {
  return (
    <section className="w-full px-2  md:px-3 my-4 mx-auto  flex flex-col space-y-5">
      <div className="w-full space-y-3 text-center ">
        <h3 className="text-3xl font-medium">Our Solutions</h3>
        <hr className="w-[12rem] mx-auto rounded-md  border-2 border-blue-700" />
        <h4 className="text-4xl font-semibold">
          Invest in your future with our solutions.
        </h4>
      </div>
      <div className=" max-w-[1400px] grid mx-auto grid-rows-3 grid-cols-1 gap-0 sm:gap-3 md:gap-8 sm:grid-rows-1 sm:grid-cols-3  ">
        <div className="flex w-full space-y-10 items-center flex-col md:space-y-12 py-5 h-full  ss:space-y-3">
          <div
            data-aos="fade-right"
            data-aos-delay="70"
            className="card flex  w-full justify-around gap-2 hover:scale-105 transform duration-300 ease-in-out hover:bg-blue-700 cursor-pointer hover:text-white hover:shadow-md hover:shadow-black"
          >
            <div className="w-[30%] ">
              <img
                src={solarSVG}
                alt="solar img"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="card__content w-[70%]">
              <p className="card__title">Solar Offgrid Power</p>
              <p className="card__description">
              This system powers premises using only sunlight and stored battery energy, ensuring utility grid independence.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="70"
            className="card_1 flex  justify-around  gap-2 hover:scale-105 transform duration-300 ease-in-out hover:bg-blue-700 cursor-pointer hover:text-white hover:shadow-md hover:shadow-black"
          >
            <div className="w-[30%]">
              <img
                src={solarEnergy}
                alt="solar img"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="card__content w-[70%]">
              <p className="card__title">Solar Hybrid</p>
              <p className="card__description">
              A Solar Hybrid system merges on-grid and off-grid benefits, ideal for areas with grid access but frequent power outages.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="70"
            className="card_2 flex  justify-around  gap-2 hover:scale-105 transform duration-300 ease-in-out hover:bg-blue-700 cursor-pointer hover:text-white hover:shadow-md hover:shadow-black"
          >
            <div className="w-[30%]">
              <img
                src={Powergeneration}
                alt="solar img"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="card__content w-[70%]">
              <p className="card__title">Solar Grid Tie</p>
              <p className="card__description">
              Grid-tie systems feed electricity from your panels to the grid, and you're compensated by Kenya Power for the generated power.
              </p>
            </div>
          </div>
        </div>
        <div className="  w-full  rounded-lg overflow-hidden">
          
          <img
            src={SolarDesign}
            alt="Solar System"
            className="w-full h-full max-h-[45rem] sm:max-h-[50rem] object-fill  object-center"
            loading="lazy"
          />
        </div>
        <div className="flex  w-full space-y-10  items-center flex-col md:space-y-12 py-5 h-full  ss:space-y-3">
          <div
            data-aos="fade-left"
            data-aos-delay="70"
            className="card_3 flex justify-around  gap-2 hover:scale-105 transform duration-300 ease-in-out hover:bg-blue-700 cursor-pointer hover:text-white hover:shadow-md hover:shadow-black"
          >
            <div className="w-[30%]">
              <img
                src={waterHeater}
                alt="solar img"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="card__content w-[70%]">
              <p className="card__title">Solar Water Heaters</p>
              <p className="card__description">
              Solar Water Heaters cut annual hot water costs by 70% and are supplied and installed in Kenya.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="70"
            className="card_4 flex justify-around gap-2  hover:scale-105 transform duration-300 ease-in-out hover:bg-blue-700 cursor-pointer hover:text-white hover:shadow-md hover:shadow-black"
          >
            <div className="w-[30%]">
              <img
                src={Bulb}
                alt="solar img"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="card__content w-[70%]">
              <p className="card__title"> Solar Water Pumps </p>
              <p className="card__description">
              The ideal solution for water supply and pumping in remote Kenyan areas aims to ensure water availability everywhere.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="70"
            className="card_5 flex justify-around gap-2 hover:scale-105 transform duration-300 ease-in-out hover:bg-blue-700 cursor-pointer hover:text-white hover:shadow-md hover:shadow-black"
          >
            <div className="w-[30%]">
              <img
                src={Pump}
                alt="solar img"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="card__content w-[70%]">
              <p className="card__title"> Solar Lights</p>
              <p className="card__description">
              Solar lights are eco-friendly, easy to install, and provide significant illumination; we supply Solar LED Lights in Kenya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurSolutions;
