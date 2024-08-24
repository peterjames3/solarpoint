import AboutUsImg from "../assets/EF_ECO..webp";
import "aos/dist/aos.css";

function AboutPowerBackup() {
  return (
    <section
        className="w-full px-3 pt-4  mt-8"
    >
      <h2 className="text-center text-3xl text-black font-bold uppercase ">
        Power backup
      </h2>
      <div className="bg-cardBg w-full">
        <div className="wrapper py-10 px-3 flex flex-col gap-4 sm:flex-row my-5">
          <div className="w-full  md:w-1/2 ss:w-full rounded-md overflow-hidden bg-gradient-to-r from-slate-700 to-gray-800 relative">
            <img
              src={AboutUsImg}
              alt="Aboutus img"
              loading="lazy"
              className="w-full h-full object-fit mix-blend-overlay"
            />
          </div>
          <div className="w-full md:w-1/2 ss:w-full px-3 space-y-9 pt-2">
            <h3 className="text-3xl md:text-4xl uppercase font-poppins font-semibold text-textColor">
              What is a power backup?
            </h3>
            <p className="text-xl font-Rubik">
              A backup power system utilizes an inverter charger and a battery
              bank to store energy, which can then be used in the event of a
              power outage. This system is distinct from conventional backup
              generators that run on diesel or petrol. When the power grid is
              functioning, it charges the battery bank, allowing the stored
              energy to be used during power failures. The operation of this
              system is fully automatic, eliminating the need for manual
              intervention.Go Solar Power Backup offers a comprehensive solution
              that combines the capabilities of an uninterruptible power source
              (UPS), a pure sine wave inverter, an advanced solar battery charge
              controller, and a maximum power point tracker into one compact,
              cutting-edge device capable of harnessing energy from various
              sources. This harvested energy is ready for immediate use or can
              be stored in batteries for later use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPowerBackup;
