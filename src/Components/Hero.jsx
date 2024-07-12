import React from "react";
import HeroImg from "../assets/hero-2..webp";
import img3 from "../assets/img3..webp";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
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
      <div className="relative w-full bg-gradient-to-r from-slate-900 to-gray-600 h-full  ">
        <img
          src={HeroImg}
          alt=""
          loading="lazy"
          className="flex-shrink-0 mix-blend-overlay  object-cover h-full w-full"
        />
        <div className=" absolute top-[55%] left-[50%] transition -translate-x-1/2 -translate-y-1/2 text-white space-y-5 text-center flex flex-col items-start w-full sm:h-auto rounded-sm pt-4 ">
          <div className="w-full px-8  h-full space-y-10">
            <h1 className=" text-6xl md:text-8xl px-8 uppercase  font-bold ">
              At Solar Point Systems
            </h1>
            <h2 className=" text-3xl xs:text-5xl font-medium px-8 leading-tight">
              We deal with a variety of products ranging from:
              <span className="text-green-500">{typeEffect}</span>
            </h2>
            <div className="flex gap-6 justify-center">
              <AboutUsButton />

              <ContactUsButton />
            </div>
          </div>
        </div>
     
      </div>
    </section>
  );
}

export default Hero;
