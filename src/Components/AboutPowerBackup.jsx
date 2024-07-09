import AboutUsImg from "../assets/EF_ECO..webp";
import { FaSearch } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { IoBulbSharp } from "react-icons/io5";
import { CgCommunity } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutPowerBackup() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="w-full px-3 pt-4 bg-[#E5E9EC] mt-8"
    >
      <h2 className="text-center text-3xl text-black font-bold uppercase ">
        Power backup
      </h2>
      <div className="max-w-[1440px] mt-0 mx-auto min-h-[10rem] p-3 flex flex-col gap-4 md:flex-row my-5">
        <div className="w-full  md:w-1/2 ss:w-full rounded-md overflow-hidden bg-gradient-to-r from-slate-600 to-gray-800 relative">
          <img
            src={AboutUsImg}
            alt="Aboutus img"
            className="w-full h-full object-fill mix-blend-overlay"
          />
         
        </div>
        <div className="w-full md:w-1/2 ss:w-full px-3 space-y-9 pt-2">
          <h3 className="text-4xl md:text-5xl uppercase font-semibold text-blue-700">
            What is a power backup?
          </h3>
          <p className="text-2xl">
            A backup power system utilizes an inverter charger and a battery
            bank to store energy, which can then be used in the event of a power
            outage. This system is distinct from conventional backup generators
            that run on diesel or petrol. When the power grid is functioning, it
            charges the battery bank, allowing the stored energy to be used
            during power failures. The operation of this system is fully
            automatic, eliminating the need for manual intervention.Go Solar
            Power Backup offers a comprehensive solution that combines the
            capabilities of an uninterruptible power source (UPS), a pure sine
            wave inverter, an advanced solar battery charge controller, and a
            maximum power point tracker into one compact, cutting-edge device
            capable of harnessing energy from various sources. This harvested
            energy is ready for immediate use or can be stored in batteries for
            later use.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPowerBackup;
