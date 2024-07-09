import { GrCompliance } from "react-icons/gr";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { CiStar } from "react-icons/ci";
import CountUp from 'react-countup';
import AOS from 'aos'
import 'aos/dist/aos.css';

function CompletedProject() {
  return (
    <section data-aos="fade-up"
    data-aos-duration="3000" className='w-full my-24 mx-auto flex  md:flex-row flex-wrap gap-4  justify-around py-6'>
        <div className='space-y-4 flex items-center flex-col'>
            <nav className='text-8xl  text-yellow-950 hover:text-yellow-800 transition-all delay-300 cursor-pointer'><GrCompliance /></nav>
            <h5 className='text-5xl text-black font-medium'><CountUp start={0} end={20} duration={4.75} /></h5>
            <p className='text-2xl'>complete projects</p>
        </div>
        <div className='space-y-4 flex items-center flex-col'>
            <nav className='text-8xl  text-yellow-950 hover:text-yellow-800 transition-all delay-300 cursor-pointer'><GiEarthAfricaEurope /></nav>
            <h5 className='text-5xl text-black font-medium' ><CountUp start={0} end={5} duration={4.75} /></h5>
            <p className='text-2xl'>African countries</p>
        </div>
        <div className='space-y-4 flex items-center flex-col'>
            <nav className='text-8xl  text-yellow-950 hover:text-yellow-800 transition-all delay-300 cursor-pointer'><CiStar /></nav>
            <h5 className='text-5xl text-black font-medium'><CountUp start={0} end={3} duration={4.75} /></h5>
            <p className='text-2xl'>Years of experience</p>
        </div>
        <div className='space-y-4 flex items-center flex-col'>
            <nav className='text-8xl  text-yellow-950 hover:text-green-800 transition-all delay-300 cursor-pointer'><GrUserExpert /></nav>
            <h5 className='text-5xl text-black font-medium'><CountUp start={0} end={10} duration={4.75} /></h5>
            <p className='text-2xl'>Employees</p>
        </div>
        
        

      
    </section>
  )
}

export default CompletedProject
