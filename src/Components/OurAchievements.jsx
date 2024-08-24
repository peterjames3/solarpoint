import { FaGoogleWallet } from "react-icons/fa6";
import { GrInstallOption } from "react-icons/gr";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdOutlineCo2 } from "react-icons/md";
import "aos/dist/aos.css";
function OurAchievements() {
  return (
    
      <section   data-aos="fade-up"
      data-aos-duration="3000" className="w-full   py-7 px-10  ">
        <div className="w-full font-poppins pb-4 flex flex-col items-center space-y-3">
          <h3 className="text-center text-3xl text-black font-Poppins font-semibold pt-9">
            Our Achievements
          </h3>
          <hr className="w-[10rem] border-b-[3px] rounded border-blue-700" />
          <h4 className="text-center text-4xl font-bold">
            Illuminating a Greener Future with Over 1 Gigawatt of Solar Energy
            Deployed
          </h4>
        </div>

        <div className="wrapper bg-cardBg grid grid-rows-4 grid-cols-1 xs:grid-col-2 xs:grid-rows-2 ss:grid-cols-2 ss:grid-rows-2  md:grid-rows-1 md:grid-cols-4 gap-3 ">
          <div className="rounded-sm  overflow-y-auto shadow-md shadow-slate-800 text-center items-center flex flex-col px-2 bg-white 
          sm:min-h-[30rem] py-5">
            <div className="h-[40%] w-full flex items-center justify-center">
              <FaGoogleWallet className="text-9xl text-brandD" />
            </div>
            <div className="h-[60%] w-full text-center space-y-2">
              <h5 className="text-2xl font-medium text-black ">
                Over $20,000 Saved Annually
              </h5>
              <p className="text-xl font-Rubik">
                Our clients save an average of $20,000 annually on energy costs,
                contributing to both their financial and environmental goals.
              </p>
            </div>
          </div>
          <div className="rounded-sm overflow-y-auto  shadow-md shadow-slate-800 text-center items-center flex flex-col px-2 bg-white">
            <div className="h-[40%] w-full flex items-center justify-center">
              <GrInstallOption className="text-9xl text-brandD" />
            </div>
            <div className="h-[60%] w-full text-center space-y-2">
              <h5 className="text-2xl font-medium">5,000+ Systems Installed</h5>
              <p className="text-xl font-Rubik">
                With over 5,000 solar systems installed, we&apos;re leading the
                charge towards a more sustainable future, one installation at a
                time.
              </p>
            </div>
          </div>
          <div className="rounded-sm overflow-y-auto  shadow-md shadow-slate-800 text-center items-center flex flex-col px-2 bg-white">
            <div className="h-[40%] w-full flex items-center justify-center">
              <TbBrandGoogleAnalytics className="text-9xl text-brandD" />
            </div>
            <div className="h-[60%] w-full text-center space-y-2">
              <h5 className="text-2xl font-medium">
                Expert Analytical Services
              </h5>
              <p className="text-xl font-Rubik">
                Our cutting-edge analytical services ensure your solar
                investment is optimized for efficiency and long-term gains.
              </p>
            </div>
          </div>
          <div className="rounded-sm overflow-y-auto shadow-md shadow-slate-800 text-center items-center flex flex-col px-2 bg-white">
            <div className="h-[40%] w-full flex items-center justify-center">
              <MdOutlineCo2 className="text-9xl text-brandD" />
            </div>
            <div className="h-[60%] w-full text-center space-y-2">
              <h5 className="text-2xl font-medium">
                100,000 Tons of CO2 Saved
              </h5>
              <p className="text-xl font-Rubik">
                Our solar installations have collectively saved the planet from
                over 100,000 tons of CO2 emissions, helping to combat climate
                change.
              </p>
            </div>
          </div>
        </div>
      </section>
    
  );
}

export default OurAchievements;
