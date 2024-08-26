import AOS from 'aos'
import HeroImg from "../assets/hero-2..webp";

function Projects() {
  return (
  <section data-aos="fade-up"
  data-aos-duration="3000" className='max-w-8xl my-2 mx-auto min-h-[30rem]'>
     <div className="w-full pb-8 flex flex-col font-poppins items-center space-y-3">
        <h3 className="text-center text-3xl text-black  font-poppins font-bold pt-9">
          Projects
        </h3>
        <hr className="w-[10rem] border-b-[3px] rounded border-textColor" />
        <h4 className="text-center text-4xl font-medium ">
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
          <h3 className=" text-5xl md:text-6xl uppercase text-center font-bold ">
            Our Projects
          </h3>
         
          <button className="">
            Coming soon
          </button>
        </div>
      </div>
  </section>
  )
}

export default Projects
