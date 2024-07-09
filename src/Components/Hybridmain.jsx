import React, { useEffect } from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaCheckDouble } from "react-icons/fa6";
import Hybrid from "../assets/hybrid..webp";
import OrderNow from "../Components/OrderNow";
import packages from "../Packages";
import AOS from "aos";
import "aos/dist/aos.css";

function Hybridmain() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section data-aos="fade-up" data-aos-duration="3000" className="w-full my-5">
      <div className="flex flex-col items-center text-4xl space-y-3 font-semibold">
        <h3>Our Solution</h3>
        <hr className="border-b-2 border-blue-700 w-[10rem]" />
      </div>

      <div className="max-w-[1400px] my-10 mx-auto flex flex-col sx:flex-col ss:flex-col sm:flex-row px-5 md:flex-row md:gap-5 min-h-[32rem] md:px-7 bg-slate-300 py-3">
        <div className=" w-full md:w-[50%] overflow-hidden rounded-md relative bg-gradient-to-r from-slate-800 to-gray-500">
          <img
            src={Hybrid}
            alt="man working"
            className="w-full object-fit mix-blend-overlay h-full"
          />
          <div className="absolute top-[2%] left-[0%] text-white min-h-6 px-2 space-y-5">
            <nav className="text-white text-4xl pt-3">
              <VscWorkspaceTrusted />
            </nav>
            <p className="font-Poppins">
              Trusted <br /> Service
            </p>
          </div>
        </div>
        <div className="w-full px-2 md:w-[50%] md:px-3 ss:space-y-2 md:space-y-4 font-Poppins py-2 animate-puls">
          <h4 className="font-semibold text-3xl text-blue-700 pt-2">
            Solar Hybrid
          </h4>
          <hr className="border-b-2 border-blue-700" />
          <p className="text-gray-900 text-2xl">
            A Hybrid Solar Solution integrates solar panels, battery storage,
            along with either utility or generator power, ensuring
            round-the-clock electricity supply to your devices. Tailoring to
            your long-term goals, we craft and deploy scalable solar hybrid
            power solutions to meet your specific demands. The battery serves as
            a reserve, storing energy produced by the solar panels for future
            consumption, thereby lowering your energy costs. Additionally, our
            systems offer the capability to feed excess power back into the
            utility grid, should you opt for it. We are committed to guiding you
            through the process of selecting and designing the ideal system that
            aligns with your needs and financial plan.
            <br />
            <span className="text-2xl font-medium">.</span>
          </p>
        </div>
      </div>

      <div className="w-full  px-2 my-10 py-3 flex flex-col">
        <div className="text-center text-slate-900 space-y-2 py-6">
          <h3 className="text-3xl font-medium">Hybrid Packages</h3>
          <hr className="w-[12rem] mx-auto rounded-md border-2 border-blue-700" />
          <h4 className="text-4xl font-semibold">Customized Sizing Plan</h4>
        </div>
        <div className="max-w-[1400px] mx-auto my-2 px-2 space-y-10 grid grid-cols-1 grid-rows-4 ss:grid-rows-2 ss:grid-cols-1 ss:gap-10 sm:grid-cols-2 py-10 sm:space-y-0 sm:gap-9 sm:grid-rows-2 md:grid-rows-1 md:grid-cols-3 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="rounded-md flex flex-col  shadow-xl shadow-black overflow-hidden hover:scale-105 transform duration-300"
            >
              <nav className="h-[20rem] text-center">
                <h5 className="text-5xl text-white font-medium font-Inter bg-blue-800 tracking-wider leading-tight px-7 sm:px-3 sm:py-9 ss:px-5 ss:py-12 font-poppins">
                  {pkg.title} {pkg.price}
                </h5>
              </nav>
              <nav className="h-full flex flex-col space-y-10 items-center justify-center">
                <span className="text-8xl text-blue-700">{pkg.icon}</span>
                {pkg.details.map((detail, index) => (
                  <nav key={index} className="flex flex-row gap-5 items-center text-xl text-slate-700">
                    <span className="text-blue-700">
                      <FaCheckDouble />
                    </span>
                    {detail}
                  </nav>
                ))}
                <OrderNow />
              </nav>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hybridmain;
