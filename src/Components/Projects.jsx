import AOS from 'aos'
import HeroImg from "../assets/hero-2..webp";
import { useNavigate } from 'react-router-dom'

function Projects() {
const navigate =  useNavigate();
const handleNavigate = ()=>{
  setTimeout(()=>{
    navigate('/projects')
  }, 1000)
}
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="3000"
      className="max-w-8xl mx-auto my-2 min-h-[30rem]"
    >
      <div className="flex w-full flex-col items-center space-y-3 pb-8 font-poppins">
        <h3 className="pt-9 text-center font-poppins text-3xl font-bold text-black">
          Projects
        </h3>
        <hr className="w-[10rem] rounded border-b-[3px] border-textColor" />
        <h4 className="text-center text-4xl font-medium">
          {" "}
          Explore Our Projects Catalog
        </h4>
      </div>
      <div className="relative h-[40rem] w-full bg-gradient-to-r from-slate-900 to-gray-600">
        <img
          src={HeroImg}
          alt=""
          className="h-full w-full flex-shrink-0 mix-blend-overlay"
        />
        <div className="absolute left-1/2 top-[50%] flex w-[80%] -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-5 text-white transition">
          <h3 className="text-center text-5xl font-bold uppercase md:text-6xl">
            Our Projects
          </h3>

          <button onClick={handleNavigate} className="btn--secondary">Explore Our Projects</button>
        </div>
      </div>
    </section>
  );
}

export default Projects
