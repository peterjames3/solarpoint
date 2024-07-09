import React, {useState} from "react";
import Airportimg from "../assets/install..webp";
import {useNavigate} from "react-router-dom"
import  GetQuoteButton from "./GetQuoteButton"

import AOS from 'aos'
import 'aos/dist/aos.css';

function Industryweserve() {
  const navigate = useNavigate();

  // State to manage modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  // Functions to handle modal open, close, and submit
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    handleCloseModal();
  };

  // Delayed navigation
  const handleGetInTouchClick = () => {
    setTimeout(() => {
      navigate('/contact');
    }, 1000);
  };
  return (
    <section className="w-full">
    <div className="w-full pb-4 flex flex-col items-center space-y-3">
        <h3 className="text-center text-3xl text-black  font-Poppins font-semibold pt-9">
          Switch Today
        </h3>
        <hr className="w-[10rem] border-b-[3px] rounded border-blue-700" />
        <h4 className="text-center text-4xl font-bold ">
          {" "}
          Switch to solar in four easy steps
        </h4>
      </div>
     
    <section data-aos="fade-up"
    data-aos-duration="2000" className="w-full bg-[#E5E9EC]  ">
      <div className="max-w-[1500px] py-5 sm:px-10 flex flex-col-reverse md:flex-row gap-0 md:gap-2 mt-16 mx-auto min-h-10 ">
      <div className="flex row gap-2 w-full md:w-[70%] items-center justify-center  ">
        <div className="flex flex-col bg-slate-300 items-center py-7 h-full  w-1/2">
          <ul className="grid grid-cols-1 space-y-2  list-none items-baseline justify-center divide-y-2 divide-gray-500">
            <li className="cursor-pointer font-semibold hover:text-blue-700 transition-all delay-300 text-gray-500 "  onClick={handleGetInTouchClick}>
              01. Get In Touch
            </li>
            <li className="cursor-pointer py-3 font-semibold hover:text-blue-700 transition-all delay-300 text-gray-500 " onClick={handleGetInTouchClick}>
              02. Consultance
            </li>
            <li className="cursor-pointer py-3 font-semibold hover:text-blue-700 transition-all delay-300 text-gray-500 " onClick={handleGetInTouchClick}> 
              03. Design and  Installation
            </li>
            <li className="cursor-pointer py-3 font-semibold hover:text-blue-700 transition-all delay-300 text-gray-500 " onClick={handleGetInTouchClick}>
              0.4 Solar On
            </li>
            <li className="cursor-pointer py-3 font-semibold hover:text-blue-700 transition-all delay-300 text-gray-500 " onClick={handleGetInTouchClick}>
              05. Management
            </li>
          </ul>
        </div>
        <div className=" md:space-y-4 md:py-7 space-y-2 w-1/2 py-2   px-2 hover:bg-blue-800 hover:text-white transition-all delay-300">
          <h3 className="text-gray-500 font-semibold font-Roboto">01</h3>
          <h4 className="md:text-3xl text-black font-mediun font-Inter font-medium">
            Solar Power at everywhere!
          </h4>
          <p className="md:text-[1.1rem]"> 01. 
            Few minutes on the phone with one of our experienced solar energy consultant is all it takes for begin.
          {" "}
          </p>
          <p className="md:text-[1.1rem]">02. We'll design a custome solar energy system that fits your electricity needs.</p>
          <p className="md:text-[1.1rem]">03. Turn on your new solar energy system then sit back and watch the saving  add up!</p>
          <p className="md:text-[1.1rem]">04.  We even monitor the systems remotely and take up full maintenance for best performance.</p>
          <GetQuoteButton />
        
        </div>
      </div>
      <div className=" w-full md:w-[49%] flex-grow-1 relative bg-gradient-to-r from-slate-800 to-gray-500">
        <img
          src={Airportimg}
          alt="solar at airport"
          loading="lazy"
          className="w-full h-full bg-cover mix-blend-overlay"
        />
        <div className="absolute top-[40%] md:top-[60%] w-full bg-transparent divide-y-2 divide-slate-300 px-3">
          <nav className="flex flex-row justify-between items-center text-white mb-2">
            <h3 className=" font-semibold font-Inter text-2xl">
              Installition in Process
            </h3>
            <h4 className="font-thin text-3xl">01</h4>
          </nav>
          <div className="flex flex-row justify-between items-center px-2">
            <nav className="w-1/2">
              <h4 className="font-inter font-thin text-white">investors</h4>
              <p className="font-semibold text-white">15 x Fronius Eco 27kW</p>
            </nav>
            <nav className="w-1/2">
              <h4 className="font-inter font-thin text-white">Panels</h4>
              <p className="font-semibold text-white">
                1330 x 355W  Solar Panels
              </p>
            </nav>
          </div>
        </div>
      </div>
      </div>
    </section>
   
    </section>
    
  );
}

export default Industryweserve;
