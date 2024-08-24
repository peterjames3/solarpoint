// Import Swiper React components
import Carousel3 from "../assets/carousel-3..webp";

const AboutUsHero = () => {
  return (
    <section className="w-full ">
      <div className="relative w-full bg-gradient-to-r from-slate-700 to-gray-800 h-[35rem]  ">
        <img
          src={Carousel3}
          alt="about us image"
          loading="lazy"
          className=" object-fill aspect-video flex-shrink-0 mix-blend-overlay h-full w-full"
        />
        <div className="absolute top-[50%] left-1/2 transition -translate-x-1/2 -translate-y-1/2  flex flex-col ss:flex-row  w-full sm:w-[80%] ">
          <div className="w-full sm:w-1/2">
            <h1 className=" text-green-500 text-4xl md:text-5xl uppercase text-center font-semibold ">
              About Us
            </h1>
          </div>

          <div className="sm:w-1/2">
            <h2 className=" text-slate-400 text-2xl font-medium text-center">
              Reach out for inquiries, or to learn more about our services. Our
              team is ready to support your journey towards sustainability and
              innovation.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
