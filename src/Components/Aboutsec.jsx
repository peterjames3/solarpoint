import SolarPanel from "../assets/carousel-2..webp";
import Green from "../assets/green.jpg";
import factory from "../assets/factory.jpg";
import { GiGreenPower } from "react-icons/gi";
import { CiCircleCheck } from "react-icons/ci";
import { TbSolarPanel2 } from "react-icons/tb";
import { TbBuildingFactory } from "react-icons/tb";
import AboutUsButton from "./AboutUsButton";
import AOS from "aos";
import "aos/dist/aos.css";

function Aboutus() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="3000"
      className="wrapper px-10"
    >
      <section className="flex w-full flex-col items-center space-y-3 pb-4 font-poppins">
        <h3 className="pt-9 text-center font-poppins text-3xl font-bold text-black">
          About Us
        </h3>
        <hr className="w-[10rem] rounded border-b-[3px] border-textColor" />
        <h4 className="text-center text-4xl font-medium">
          {" "}
          We are #1 In The World Of Solar & Renewable Energy
        </h4>
      </section>

      <div className="mx-auto mt-4 grid w-full grid-cols-1 gap-4 font-Rubik sm:grid-cols-2 sm:gap-3 md:flex md:grid-cols-3 lg:flex">
        <div className="h-[28rem] w-full space-y-5 rounded-md border-y-4 border-green-700 bg-slate-800 px-2 pb-2 pt-2 text-center text-cardBg shadow-lg transition-all delay-300 hover:scale-100 dark:bg-gray-800 md:h-[26.7rem] md:w-[35%]">
          <h4 className="font-Inter pt-5 text-2xl font-semibold">
            We Are Commited to provide Quality Service
          </h4>
          <p className="font-medium">
            We have over two decades of experience, our mission remains to
            empower communities and businesses by providing top-tier renewable
            energy solutions that ensure a sustainable future for all.
          </p>

          <div className="font-Roboto flex w-full flex-row items-center justify-center gap-5 text-center uppercase xs:hidden sm:hidden md:flex">
            <p className="text-5xl font-bold text-white">3+</p>
            <p className="font-semibold text-cardBg">Years Experience </p>
          </div>
          <AboutUsButton />
        </div>

        <div className="relative h-[26.2rem] w-full flex-grow overflow-hidden rounded-md bg-gradient-to-r from-slate-800 to-gray-500 md:h-[26.7rem] md:w-[32%]">
          <img
            src={Green}
            alt="man working"
            loading="lazy"
            className="h-full w-full object-cover mix-blend-overlay"
          />

          <div className="transform[-translate-x-1/2] absolute left-[50%] top-[60%] h-full w-full cursor-pointer space-y-5 bg-gray-800 pb-6 pt-3 text-center text-white transition-all duration-500 ease-in-out hover:left-0 hover:top-0 hover:translate-y-0 hover:scale-100">
            {" "}
            <nav className="flex justify-center text-7xl text-yellow-800">
              <TbBuildingFactory />
            </nav>
            <h4 className="font-Rubik text-xl font-semibold text-cardBg underline underline-offset-2">
              Manufacturing
            </h4>
            <p className="font-medium">
              Solar energy offers immense benefits to the manufacturing sector,
              from powering various systems to running farm equipment. Our solar
              solutions for agriculture help farmers and agribusinesses:
            </p>
            <div className="flex flex-col px-6 text-start text-green-600">
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

        <div className="relative h-[26.2rem] w-full flex-grow overflow-hidden rounded-md bg-gradient-to-r from-slate-800 to-gray-500 md:h-[26.7rem] md:w-[32%]">
          <img
            src={factory}
            alt="man working"
            className="h-full w-full object-cover mix-blend-overlay"
          />
          <div className="transform[-translate-x-1/2] absolute left-[50%] top-[60%] h-full w-full cursor-pointer space-y-5 bg-gray-800 pb-6 pt-3 text-center text-white transition-all duration-500 ease-in-out hover:left-0 hover:top-0 hover:translate-y-0 hover:scale-100">
            <nav className="flex justify-center text-7xl text-yellow-800">
              <GiGreenPower />
            </nav>
            <h4 className="font-Rubik text-xl font-semibold text-cardBg underline underline-offset-2">
              The Greenhouse Effect
            </h4>
            <p className="font-medium">
              Solar energy offers immense benefits to the agricultural sector,
              from powering irrigation systems to running farm equipment. Our
              solar solutions for agriculture help farmers and agribusinesses:
            </p>
            <div className="flex flex-col px-6 text-start text-green-600">
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
        <div className="relative h-[28.7rem] w-full flex-grow overflow-hidden rounded-md bg-gradient-to-r from-slate-800 to-gray-500 md:h-[26.7rem] md:w-[32%]">
          <img
            src={SolarPanel}
            alt="man working"
            className="h-full w-full object-cover mix-blend-overlay"
          />
          <div className="transform[-translate-x-1/2] absolute left-[50%] top-[60%] h-full w-full cursor-pointer space-y-5 bg-gray-800 pb-6 pt-3 text-center text-white transition-all duration-500 ease-in-out hover:left-0 hover:top-0 hover:translate-y-0 hover:scale-100">
            <nav className="flex justify-center text-7xl text-yellow-800">
              <TbSolarPanel2 />
            </nav>
            <h4 className="font-Rubik text-xl font-semibold text-cardBg underline">
              Solar Panels
            </h4>
            <p className="font-medium">
              Solar panels are a cornerstone of renewable energy technology,
              allowing for the direct conversion of sunlight into electricity.
              They play a crucial role in the global shift towards sustainable
              energy sources, offering a clean. fossil fuels. They different
              types including:
            </p>
            <div className="flex flex-col space-y-4 px-6 text-start text-green-600">
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
          <div className="relative h-[28.7rem] w-full flex-grow overflow-hidden rounded-md bg-gradient-to-r from-slate-800 to-gray-500 md:h-[22.5rem] md:w-[32%]">
            <img
              src={SolarPanel}
              alt="man working"
              className="h-full w-full object-cover mix-blend-overlay"
            />
            <div className="hover:height-[100%] delay-600 hover:-traslate-y-60 absolute top-[60%] cursor-pointer space-y-5 bg-gray-800 pb-6 pt-3 text-center text-white transition-all hover:top-[0%] hover:scale-100">
              <nav className="flex justify-center text-7xl text-yellow-800">
                <TbSolarPanel2 />
              </nav>
              <h4 className="font-Inter text-xl font-semibold underline">
                Solar Panels
              </h4>
              <p className="font-medium">
                Solar panels are a cornerstone of renewable energy technology,
                allowing for the direct conversion of sunlight into electricity.
                They play a crucial role in the global shift towards sustainable
                energy sources, offering a clean. fossil fuels. They include:
              </p>
              <div className="flex flex-col px-6 text-start text-green-600">
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
    </section>
  );
}

export default Aboutus;
