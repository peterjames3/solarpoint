import AboutUsImg from "../assets/EF_ECO..webp";
import "aos/dist/aos.css";

function AboutPowerBackup() {
  return (
    <section className="mt-8 w-full px-3 pt-4">
      <h2 className="text-center text-3xl font-bold uppercase text-black">
        Power backup
      </h2>
      <div className="w-full bg-cardBg">
        <div className="wrapper my-5 flex flex-col gap-4 px-3 py-10 sm:flex-row">
          <div className="relative w-full overflow-hidden rounded-md bg-gradient-to-r from-slate-700 to-gray-800 ss:w-full md:w-1/2">
            <img
              src={AboutUsImg}
              alt="Aboutus img"
              loading="lazy"
              className="object-fit h-full w-full mix-blend-overlay"
            />
          </div>
          <div className="w-full space-y-9 px-3 pt-2 ss:w-full md:w-1/2">
            <h3 className="font-poppins text-3xl font-semibold uppercase text-textColor md:text-4xl">
              What is a power backup?
            </h3>
            <p className="font-Rubik text-xl">
              A backup power system utilizes an inverter charger and a battery
              bank to store energy, which can then be used in the event of a
              power outage. This system is distinct from conventional backup
              generators that run on diesel or petrol. When the power grid is
              functioning, it charges the battery bank, allowing the stored
              energy to be used during power failures. The operation of this
              system is fully automatic, eliminating the need for manual
              intervention.Power Backup offers a comprehensive solution that
              combines the capabilities of an uninterruptible power source
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
