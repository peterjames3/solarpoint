import React from "react";
import { TbSquareCheckFilled } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import UsImg from "../assets/gallery-3..webp";


function Whyychooseus() {
  return (
    <section  data-aos="fade-up"
    data-aos-duration="3000"  className="w-full my-10  bg-[#E5E9EC] py-6">
      <div className="max-w-[1400px] mt-0 mx-auto flex flex-col px-10  sm:flex-row sm:gap-4 md:flex-row md:gap-5 min-h-[28rem] md:px-7">
      <div className=" w-full xs:w-full  sm:w-[50%] md:w-[50%] overflow-hidden rounded-md relative bg-gradient-to-r from-slate-800 to-gray-500">
        <img
          src={UsImg}
          alt="man working"
          loading="lazy"
          className="w-full object-cover mix-blend-overlay h-full"
        />
        <div className="absolute top-[2%] left-[0%] text-white  min-h-6 px-2 space-y-5">
          <nav className="text-white text-4xl pt-3">
            <VscWorkspaceTrusted />
          </nav>
          <p className="font-Poppins">
            Trusted <br></br>Service
          </p>
        </div>
      </div>
      <div className="w-full xs:w-full sm:w-[50%] px-2 md:w-[50%] md:px-3 space-y-4 font-Poppins py-2 animate-puls">
        <h2 className="font-semibold text-3xl text-blue-700 pt-2">
          Why Choose us?
        </h2>
        <hr className="border-b-2 border-blue-700" />
        <p className="text-gray-900 text-xl">
          Unbeatable service, quality installations, and experience Having the
          correct equipment installed, and calculating the right sized solar
          array to match the power needs for any home or business requires
          technical knowledge, planning, product knowledge, and expertise.There
          is no substitute for experience when getting this right, and we are
          the most qualified, and the most experienced solar installation team
          in Kenya.
        </p>
        <div className=" flex flex-col text-start font-medium space-y-2">
          <div className="flex flex-row items-center">
            <span className="px-2  text-blue-700">
              <TbSquareCheckFilled aria-label="Feature checked" />
            </span>
            <span className="text-black ">Reduce energy costs</span>
          </div>
          <div className="flex flex-row items-center">
            <span className="px-2  text-blue-700">
              <TbSquareCheckFilled aria-label="Feature checked" />
            </span>
            <span>Increase productivity,</span>
          </div>
          <div className="flex flex-row items-center">
            <span className="px-2  text-blue-700">
              <TbSquareCheckFilled aria-label="Feature checked" />
            </span>
            <span>Contribute to a cleaner environment.</span>
          </div>
          <div className="flex flex-row items-center">
            <span className="px-2  text-blue-700">
              <TbSquareCheckFilled aria-label="Feature checked" />
            </span>
            <span>Great Return On Investments.</span>
          </div>
          <div className="flex flex-row items-center">
            <span className="px-2  text-blue-700">
              <TbSquareCheckFilled aria-label="Feature checked" />
            </span>
            <span>Hassle Free Install.</span>
          </div>
        </div>
        
      </div>
      </div>
    </section>
  );
}

export default Whyychooseus;
