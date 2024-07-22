import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { GoStarFill } from "react-icons/go";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function FromClient() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="300"
        className="min-h-[16rem] bg-white"
      >
        <div className="w-full pb-4 flex flex-col items-center space-y-3">
          <h3 className="text-center text-3xl text-black font-Poppins font-semibold pt-9">
            Real Stories, Real Impact
          </h3>
          <hr className="w-[15rem] border-b-[3px] rounded border-blue-700" />
          <h4 className="text-center text-4xl font-bold ">
            How Our Products Made a Difference
          </h4>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 9500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <div className="min-h-[16rem]">
            <SwiperSlide>
              <div className=" p-2 flex justify-center md:px-10 bg-white text-black font-bold mt-4 mx-auto min-h-[29rem] sm:py-8 ">
                <div className="w-full px-3 pb-7 md:pb-2 align-center items-center justify-center h-[100%] bg-slate-500 md:w-1/2 md:px-20 rounded-lg shadow-md cursor-pointer shadow-black hover:scale-100 border-x-2 border-green-600 transition-all delay-300">
                  <nav className="flex items-center justify-center gap-4 py-5">
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                  </nav>
                  <nav className="mb-8">
                    <h4 className="text-3xl text-center py-2">Mary</h4>
                    <p>
                      I want to express my gratitude for the quick, efficient,
                      and amiable manner in which you addressed my issue, from
                      the initial quote to the finalization of the task. Working
                      with you has been an immensely satisfying experience. Warm
                      regards. The pursuit of genuine passion, the innovator,
                      does not dwell in hatred as much as it embraces the
                      similarity of accusations, the uncorrupted and those not
                      deserted, laborious in spirit, rich in adversities.
                    </p>
                  </nav>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" p-2 flex justify-center md:px-10 bg-white text-black font-bold mt-4 mx-auto min-h-[29rem] md:py-8 ">
                <div className="w-full px-3 pb-7 md:pb-2 align-center items-center justify-center h-[100%] bg-slate-500 md:w-1/2 md:px-20 rounded-lg shadow-md cursor-pointer shadow-black hover:scale-100 border-x-2 border-green-600 transition-all delay-300">
                  <nav className="flex items-center justify-center gap-4 py-5">
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                  </nav>
                  <h4 className="text-3xl text-center py-2">Peter</h4>
                  <nav className="mb-8">
                    <p>
                      {" "}
                      I want to express my gratitude for the quick, efficient,
                      and friendly service I received. From the initial quote to
                      the final installation, everything was handled
                      professionally and smoothly. Working with your team has
                      been a truly satisfying experience. Your commitment to
                      excellence and genuine passion for renewable energy shine
                      through. The journey has been inspiring, and I am thrilled
                      with the outcome.
                    </p>
                  </nav>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" p-2 flex justify-center md:px-10 bg-white text-black font-bold mt-4 mx-auto min-h-[29rem] md:py-8 ">
                <div className="w-full px-3 pb-7 md:pb-2 align-center items-center justify-center h-[100%] bg-slate-500 md:w-1/2 md:px-20 rounded-lg shadow-md cursor-pointer shadow-black hover:scale-100 border-x-2 border-green-600 transition-all delay-300">
                  <nav className="flex items-center justify-center gap-4 py-5">
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                  </nav>
                  <h4 className="text-3xl text-center py-2">Hanzo</h4>
                  <nav className="mb-8">
                    <p>
                      {" "}
                      Your team has exceeded my expectations in every way. The
                      speed and efficiency of the solar panel installation were
                      remarkable, and the customer service was top-notch.
                      Everyone was knowledgeable and helpful, making the entire
                      process stress-free. I am delighted with the quality of
                      the products and the positive impact on my energy bills.
                      This experience has been nothing short of excellent.
                    </p>
                  </nav>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" p-2 flex justify-center md:px-10 bg-white text-black font-bold mt-4 mx-auto min-h-[29rem] md:py-8 ">
                <div className="w-full px-3 pb-7 md:pb-2 align-center items-center justify-center h-[100%] bg-slate-500 md:w-1/2 md:px-20 rounded-lg shadow-md cursor-pointer shadow-black hover:scale-100 border-x-2 border-green-600 transition-all delay-300">
                  <nav className="flex items-center justify-center gap-4 py-5">
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                  </nav>
                  <h4 className="text-3xl text-center py-2">Derric</h4>
                  <nav className="mb-8">
                    <p>
                      {" "}
                      I highly commend your team for their exceptional service.
                      The entire process, from consultation to installation, was
                      handled with utmost care and expertise. The staff's
                      professionalism and dedication to customer satisfaction
                      were apparent throughout. I am thrilled with the solar
                      system's performance and the reduction in my energy costs.
                      Thank you for a wonderful experience.
                    </p>
                  </nav>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" p-2 flex justify-center md:px-10 bg-white text-black font-bold mt-4 mx-auto min-h-[29rem] md:py-8 ">
                <div className="w-full px-3 pb-7 md:pb-2 align-center items-center justify-center h-[100%] bg-slate-500 md:w-1/2 md:px-20 rounded-lg shadow-md cursor-pointer shadow-black hover:scale-100 border-x-2 border-green-600 transition-all delay-300">
                  <nav className="flex items-center justify-center gap-4 py-5">
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                    <span className="text-pink-500 cursor-pointer text-xl ">
                      <GoStarFill />
                    </span>
                  </nav>
                  <nav className="mb-8">
                    <h4 className="text-3xl text-center py-2">Lucy</h4>
                    <p>
                      {" "}
                      Thank you for the outstanding service and high-quality
                      solar products. Your team was friendly, efficient, and
                      highly knowledgeable, making the whole experience pleasant
                      and easy. I appreciate the thorough explanations and
                      support provided throughout the process. The results have
                      been impressive, and I am very satisfied with my decision
                      to go solar.
                    </p>
                  </nav>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </section>
    </>
  );
}

export default FromClient;
