import AboutUsImg from "../assets/Aboutus..webp";
import { FaSearch } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { IoBulbSharp } from "react-icons/io5";
import { CgCommunity } from "react-icons/cg";
import "aos/dist/aos.css";
function OurCoreService() {
  return (
    <section
 /*      data-aos="fade-up"
      data-aos-duration="3000"  */
      className="w-full px-3  my-10 "
    >
      <nav className="w-full  flex flex-col justify-center items-center my-3">
      <h2 className="text-center font-poppins text-3xl text-black font-bold uppercase py-2">
        Our core Values
      </h2>
      <hr className="w-[10rem]  border-b-[3px] rounded border-blue-700" />
      </nav>
      <div className="bg-cardBg w-ful py-6">
      <div className="wrapper min-h-[10rem] p-3 flex flex-col gap-4 md:flex-row my-5 ">
        <div className=" h-[30rem] w-full xs:w-full ss:full sm:w-1/2  rounded-md overflow-hidden bg-gradient-to-r from-slate-600 to-gray-800 relative">
          <img
            src={AboutUsImg}
            alt="Aboutus img"
            loading="lazy"
            className="w-full h-full object-fit flex-shrink-0 mix-blend-overlay"
          />
          <div className="absolute top-0  left-0 w-full h-full gap-10 px-4 py-4 grid grid-cols-2 grid-rows-2 place-content-center">
            <div className="flex flex-row justify-evenly items-center h-32 ">
              <nav className="text-2xl text-orange-400">
                <FaSearch />
              </nav>
              <nav className="text-white">
                <h4 className="text-xl font-semibold ">Efficiency </h4>
                <p>Stremlined Effectiveness</p>
              </nav>
            </div>
            <div className="flex flex-row h-32  justify-evenly  items-center text-white">
              <nav className="text-2xl text-orange-400">
                <TbTargetArrow />
              </nav>
              <nav>
                <h4 className="text-xl font-semibold ">Productivity </h4>
                <p>Optmized Output</p>
              </nav>
            </div>
            <div className="flex flex-row h-32  justify-evenly items-center">
              <nav className="text-2xl text-orange-400">
                <IoBulbSharp />
              </nav>
              <nav className="text-white">
                <h4 className="text-xl font-semibold ">Synergy </h4>
                <p>Dynamic Fusion</p>
              </nav>
            </div>
            <div className="flex flex-row h-32  justify-evenly  items-center">
              <nav className="text-2xl text-orange-400">
                <CgCommunity />
              </nav>
              <nav className="text-white">
                <h4 className="text-xl font-semibold">Cohesion </h4>
                <p>Collaboration Integration</p>
              </nav>
            </div>
          </div>
        </div>
        <div className="w-full xs:w-full ss:full sm:w-1/2  md:1/2  px-3 space-y-9 pt-2">
          <h3 className="text-4xl md:text-4xl uppercase font-semibold  font-poppins">
            We are a one-stop shop solution for all your energy needs.
          </h3>
          <p className="text-xl font-Rubik">
            SolarPoint Systems was founded on the principles of making solar
            energy affordable and accessible for everyone in Kenya. Being in the
            industry for almost two decades, we have the knowledge, expertise
            and the resources to come up with specially designed energy
            solutions for you. We the team at Green Camel always strive to
            provide clean and green energy to all our clients. We always aims to
            deliver best service & quality products at reasonable price. Our
            team is available round the clock for your service. Turn up the
            brightness and turn up the solar power is the main aim of our
            company.
           
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default OurCoreService;
