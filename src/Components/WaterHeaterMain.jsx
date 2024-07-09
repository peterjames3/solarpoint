import { TbSquareCheckFilled } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import IsometricDiagram from "../assets/Camper-Van..webp";
import Principle from "../assets/Principle..webp";
import waterHeater from "../assets/water-heater..webp";
import AOS from "aos";
import "aos/dist/aos.css";

function WaterHeaterMain() {
  return (
    <section data-aos="fade-up" data-aos-duration="3000" className="h-auto w-full ">
      <div className="max-w-[1400px] px-5 my-4 py-10 mx-auto flex flex-col sx:flex-col ss:flex-col md:flex-row-reverse md:gap-5 min-h-[32rem] md:px-7 ">
        <div className=" w-full md:w-[50%] h-[32rem] ss:h-auto md:h-[32rem] overflow-hidden rounded-md relative bg-gradient-to-r from-slate-800 to-gray-500">
          <img
            src={waterHeater}
            alt="man working"
            loading="lazy"
            className="w-full object-fit mix-blend-overlay h-full"
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
        <div className="w-full px-2 md:w-[50%] md:px-3 ss:space-y-2 md:space-y-4 font-Poppins py-2 animate-puls">
          <h2 className="font-semibold text-3xl text-blue-700 pt-2">
            Warm water on demand, every day of the year, without the burden of a
            large electric bill?
          </h2>
          <hr className="border-b-2 border-blue-700" />
          <p className="text-gray-900 text-xl">
            In the niche arena of merging solar energy technology with water
            heating solutions, we are leaders. Our proficiency encompasses
            small-scale residential projects to large-scale commercial
            installations. Whether it's a stand-alone system or integrated with
            batteries for enhanced efficiency, solar water heaters can provide
            significant ongoing savings in energy costs. This is true for
            settings anywhere, from remote rural homes to bustling urban
            enterprises..<br></br>
            <span className="text-2xl font-medium">Advantages :</span>
          </p>
          <div className=" flex flex-col text-start font-medium space-y-2">
            <div className="flex flex-row items-center">
              <span className="px-2  text-blue-700">
                <TbSquareCheckFilled aria-label="Feature checked" />
              </span>
              <span className="text-black ">Minimal Maintenance Required</span>
            </div>
            <div className="flex flex-row items-center">
              <span className="px-2  text-blue-700">
                <TbSquareCheckFilled aria-label="Feature checked" />
              </span>
              <span>No Complex Wiring or Installation</span>
            </div>
            <div className="flex flex-row items-center">
              <span className="px-2  text-blue-700">
                <TbSquareCheckFilled aria-label="Feature checked" />
              </span>
              <span>Significantly Lowers Energy Expenses</span>
            </div>
            <div className="flex flex-row items-center">
              <span className="px-2  text-blue-700">
                <TbSquareCheckFilled aria-label="Feature checked" />
              </span>
              <span>Easy and Straightforward Installation</span>
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
      <div className=" max-w-[1400px] px-5 my-4 mx-auto min-h-auto  ss:overflow-y-scroll md:overflow-auto">
        <div className="flex flex-col items-center space-y-3">
          <h3 className="text-3xl font-semibold text-black font-Inter text-center ">
            {" "}
            Water Heater
          </h3>
          <hr className="border-b-2 border-blue-700 flex items-center w-[7rem]" />
          <h5 className="text-4xl text-center font-bold text-black">
            Working Principle
          </h5>
        </div>
        <div data-aos="fade-right" className="grid grid-cols-1 grid-rows-4 gap-0 ss:grid-cols-2 ss:grid-rows-2 font-Inter mt-10">
          <div className="w-full h-auto md:h-[35rem]">
            <img
              src={IsometricDiagram}
              alt="isometric diagram"
              loading="lazy"
              className="w-full object-fit mix-blend-overlay h-full"
            />
          </div>
          <div className="h-[35rem] py-5 space-y-3 text-xl space-x-2">
            <p>
              A typical water heater system operates by converting energy into
              heat and transferring that heat to water. It's done either through
              direct means in tankless systems or indirectly via a heating
              element in storage water heaters.
            </p>
            <p>There are two main types of water heaters:</p>
            <h6 className="font-medium">
              {" "}
              1). Tankless Water Heaters (On-Demand)
            </h6>
            <p>
              Tankless water heaters directly heat water without the use of a
              storage tank. When a hot water tap is turned on, cold water
              travels through a pipe into the unit, and either a gas burner or
              an electric element heats the water. This process ensures a
              constant supply of hot water, offering a more energy-efficient
              solution as the system heats water only when it's needed.
            </p>
          </div>
          <div data-aos="fade-left" className="h-[35rem] py-5 space-y-3 text-xl space-x-2">
            <h6 className="font-medium"> 2). Storage Water Heaters</h6>
            <p>
              These water heaters involve heating water and storing it in a tank
              for later use. The heating element heats the water from the bottom
              of the tank, and the hot water rises to the top, ready to be
              distributed through the home's hot water lines. Although less
              efficient than tankless models, due to energy losses from standing
              water, they can provide a large volume of hot water that's readily
              available.
            </p>
            <h6 className="font-medium"> 3). Pipes</h6>
            <p>
              Pipes will transport water from the original source to wherever it
              needs to go; a purification system, a holding tank, etc.
            </p>

            <h6 className="font-medium"> 4) Water tank</h6>
            <p>
              The water pumping system will often include a water tank to store
              water that may be used when sunshine isn’t available.
            </p>
            <h6 className="font-medium"> 5). Pump controllers</h6>
            <p>
              The controllers regulate the water pump and allow it to be turned
              on and off. They can increase the life of the water pump by
              protecting it from electrical irregularities or motor damage if it
              keeps running when a water source runs dry. Controllers also
              maximize water delivery.
            </p>
          </div>
          <div data-aos="fade-left" className=" md:h-[40rem] ">
            <img
              src={Principle}
              alt="working principle img"
              loading="lazy"
              className=" hidden ss:block w-full object-fit  h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WaterHeaterMain;
