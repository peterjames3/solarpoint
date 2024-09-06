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
    <section className="h-[100svh] w-full ss:h-[100dvh]">
      <div className="relative h-full w-full bg-gradient-to-r from-gray-900 to-gray-700">
        <img
          src={HeroImg}
          alt="Solar panels and renewable energy solutions"
          loading="lazy"
          className="h-full w-full flex-shrink-0 object-cover mix-blend-overlay"
        />
        <div className="absolute left-[0%] top-[10%] ss:top-[22%] max-w-[890px] space-y-6 py-4 pl-8 sm:left-[0%] xl:translate-x-[14%] xl:pl-2 xxl:translate-x-[40%]">
          <div className="h-full w-full space-y-10">
            <h1 className="font-body py-2 text-4xl ss:text-5xl font-semibold text-brandC md:text-7xl">
              Empowering Sustainable Energy Solutions for a Brighter Tomorrow
            </h1>

            <h2 className="font-Rubik text-xl font-medium  text-white xs:text-3xl">
              Explore our range of high-quality solar solutions and solar
              products designed to provide sustainable energy solutions for
              homes and businesses.
            </h2>
            <p className="font-Rubik  text-xl ss:text-2xl font-medium leading-tight text-dimWhite xs:text-3xl">
              Powering your future with{" "}
              <span className="text-brandC">{typeEffect}</span>
            </p>
            <div className="flex justify-start gap-6">
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
