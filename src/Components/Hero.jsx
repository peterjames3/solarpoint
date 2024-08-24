"react";
import HeroImg from "../assets/hero-2..webp";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ContactUsButton from "./ContactUsButton";
import AboutUsButton from "./AboutUsButton";

function Hero() {
  const [typeEffect] = useTypewriter({
    words: [
      "Solar Panels",
      "Inverters",
      "Hybrid Inverters",
      "Solar Batteries",
      "Charge Controllers",
      "Solar Lights",
      "Lithium Batteries",
      "Power Backups",
      "LEDs",
    ],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 50,
    cursor: Cursor.ALL,
  });

  return (
    <section className="w-full h-[100svh] ss:h-[100dvh]">
      <div className="relative w-full bg-gradient-to-r from-gray-900 to-gray-700 h-full">
        <img
          src={HeroImg}
          alt="Solar panels and renewable energy solutions"
          loading="lazy"
          className="flex-shrink-0 mix-blend-overlay object-cover h-full w-full"
        />
        <div className=" absolute left-[0%] top-[22%] max-w-[890px] space-y-6 pl-8  py-4 sm:left-[0%]  xl:pl-2 xl:translate-x-[14%] xxl:translate-x-[40%]">
          <div className="w-full h-full space-y-10">
            <h1 className="py-2 text-5xl text-green-500 font-body md:text-7xl font-semibold">
              Empowering Sustainable Energy Solutions for a Brighter Tomorrow
            </h1>

            <h2 className="text-2xl font-Rubik xs:text-3xl font-medium text-slate-400 leading-[]">
              Explore our range of high-quality solar products designed to
              provide sustainable energy solutions for homes and businesses.
            </h2>
            <p className="text-2xl font-Rubik xs:text-3xl text-slate-400 font-medium  leading-tight">
              Powering your future with{" "}
              <span className="text-green-500">{typeEffect}</span>
            </p>
            <div className="flex gap-6 justify-start">
              <AboutUsButton
                data-aos="fade-left"
                data-aos-delay="1200"
                data-aos-offset="50"
              />
              <ContactUsButton
                data-aos="fade-left"
                data-aos-delay="1200"
                data-aos-offset="50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
