import React from 'react'
import AOS from 'aos'
import HeroImg from "../assets/hero-2..webp";

function Projects() {
  return (
  <section data-aos="fade-up"
  data-aos-duration="3000" className='max-w-8xl my-2 mx-auto min-h-[30rem]'>
     <div className="w-full pb-8 flex flex-col items-center space-y-3">
        <h3 className="text-center text-3xl text-black  font-Poppins font-semibold pt-9">
          Projects
        </h3>
        <hr className="w-[10rem] border-b-[3px] rounded border-blue-700" />
        <h4 className="text-center text-4xl font-bold ">
          {" "}
          Explore Our Projects Catalog
        </h4>
      </div>
  <div className="relative w-full bg-gradient-to-r from-slate-900 to-gray-600 h-[40rem]">
        <img
          src={HeroImg}
          alt=""
          className="flex-shrink-0 mix-blend-overlay h-full w-full"
        />
        <div className="absolute top-[50%] left-1/2 transition -translate-x-1/2 -translate-y-1/2 text-white space-y-5 flex flex-col items-center w-[80%]">
          <h1 className=" text-7xl md:text-8xl uppercase text-center font-bold ">
            Our Projects
          </h1>
         
          <button className="py-4 px-8 text-white bg-black uppercase text-[1rem] font-semibold font-Poppins hover:cursor-pointer hover:bg-blue-800  hover:text-semibold transition-all delay-300">
            Discover more
          </button>
        </div>
      </div>
  </section>
  )
}

export default Projects
