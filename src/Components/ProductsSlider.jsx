import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Jackery from "../assets/Jackery..webp";
import LED from "../assets/30LED..webp";
import Product1 from "../assets/Lifetime _ Built-in BMS..webp";
import Roomn from "../assets/amerisolar-280w..webp";
import MoreProductsButton from "../Components/MoreProductsButton";
import AOS from "aos";
import "aos/dist/aos.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

function ProductsSlider() {
  return (
    <>
      <section className="w-full flex flex-col items-center space-y-3">
        <h3 className="text-center text-3xl text-black  font-poppins font-semibold pt-9">
          Products
        </h3>
        <hr className="w-[10rem] border-b-[3px] rounded border-blue-700" />
        <h4 className="text-center text-4xl font-bold font-poppins">
          Discover Our Premier Product Collection
        </h4>
      </section>
      <section
        data-aos="zoom-in"
        data-aos-delay="70"
        className="my-20 min-h-[28rem] bg-cardBg"
      >
        <Swiper
          style={{
            "--swiper-navigation-color": "",
            "--swiper-pagination-color": "",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper wrapper"
        >
          <div
            slot="container-start"
            className="bg-cardBg  "
            data-swiper-parallax="-23%"
          ></div>

          <SwiperSlide>
            <section className="flex mt-2 px-2 mx-auto flex-col-reverse gap-0 xs:flex-col-reverse ss:flex-col-reverse ss:gap-2 sm:flex-row md:flex-row md:gap-3 max-w-8xl ss:px-16 ">
              <div className="w-full md:w-1/2 space-y-6 px-4">
                <div
                  className="title text-black font-bond text-5xl py-4 font-poppins"
                  data-swiper-parallax="-300"
                >
                  <h3 className="text-4xl md:text-5xl font-bold font-Poppins">
                    Jackery Solar is one of the best our product
                  </h3>
                </div>
                <div
                  className="subtitle text-black font-semibold font-poppins"
                  data-swiper-parallax="-200"
                >
                  <p>Power-based product</p>
                </div>
                <div
                  className="text-xl text-slate-600 font-medium font-Rubik"
                  data-swiper-parallax="-100"
                >
                  <p>
                    Jackery Solar Generator 15000, explorer 1500 and 2
                    XSolarsaga 1-- X solar panel with 3X110V/18000W AC outlet,
                    solar mobile lithium battery pack for outdoor RV/Van
                    camping, overlanding...
                    <br />{" "}
                    <span className="uppercase font-medium">
                      Superior solar charging:
                    </span>{" "}
                    Intergrate and combine the Explorer 1500 and 2 SolarSaga
                  </p>
                </div>
                <MoreProductsButton />
              </div>

              <div className="w-full md:w-1/2 ">
                <img
                  src={Jackery}
                  alt="img"
                  loading="lazy"
                  className="rounded-md h-[30rem] w-[100%]  object-fit"
                />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="flex mt-2 px-2 mx-auto flex-col-reverse gap-0 xs:flex-col-reverse ss:flex-col-reverse ss:gap-2 sm:flex-row md:flex-row md:gap-3 max-w-8xl ss:px-16">
              <div className="w-full md:w-1/2 space-y-6 px-4">
                <div
                  className="title font-bond text-5xl py-4 font-poppins"
                  data-swiper-parallax="-300"
                >
                  <h3 className="text-4xl md:text-5xl font-bold font-Poppins text-black">
                    280W amerisolar Solar Panel
                  </h3>
                </div>
                <div
                  className="subtitle text-black font-semibold font-poppins"
                  data-swiper-parallax="-200"
                >
                  <p>Power-based product</p>
                </div>
                <div
                  className="text-xl text-slate-600 font-medium font-Rubik"
                  data-swiper-parallax="-100"
                >
                  <p>
                    Amerisolar solar panel manufacturer that has been in the
                    industry for over 25 years. They produce a wide range of
                    photovoltaic (PV) modules suitable for all types of
                    installations, including residential, commercial, and
                    industrial projects. Their products are known for being:
                    <br />{" "}
                    <span className="uppercase font-medium">Reliable</span>{" "}
                    Efficient, and Competitively priced
                  </p>
                </div>
                <MoreProductsButton />
              </div>

              <div className="w-full md:w-1/2 ">
                <img
                  src={Roomn}
                  alt="img"
                  loading="lazy"
                  className="rounded-md h-[30rem] w-[100%] object-fit"
                />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="flex mt-2 px-2 mx-auto flex-col-reverse gap-0 xs:flex-col-reverse ss:flex-col-reverse ss:gap-2 sm:flex-row  max-w-8xl md:flex-row md:gap-3 max-w-8xl ss:px-16">
              <div className="w-full md:w-1/2 space-y-6 px-4">
                <div
                  className="title text-black font-bond text-5xl py-4 font-poppins"
                  data-swiper-parallax="-300"
                >
                  <h3 className="text-4xl md:text-5xl font-bold font-Poppins">
                    High-Power LEDs
                  </h3>
                </div>
                <div
                  className="subtitle text-black font-semibold font-poppins"
                  data-swiper-parallax="-200"
                >
                  <h4>Power-based product</h4>
                </div>
                <div
                  className="text-xl text-slate-600 font-medium font-Rubik"
                  data-swiper-parallax="-100"
                >
                  <p>
                    Designed to emit a greater amount of light, high-power LEDs
                    are used in lighting applications where high brightness is
                    required. These LEDs require heat sinks to manage the higher
                    heat output associated with their operation. They are used
                    in street lights, high-bay lighting, and automotive
                    headlights.
                    <br />{" "}
                    <span className="uppercase font-medium">
                      Superior solar charging:
                    </span>{" "}
                    Intergrate and combine the Explorer 1500 and 2 SolarSaga
                  </p>
                </div>
                <MoreProductsButton />
              </div>
              <div className="w-full md:w-1/2 ">
                <img
                  src={LED}
                  alt="img"
                  loading="lazy"
                  className="rounded-md h-[30rem] w-[100%] object-fit"
                />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="flex mt-2 px-2 mx-auto flex-col-reverse gap-0 xs:flex-col-reverse ss:flex-col-reverse ss:gap-2 sm:flex-row md:flex-row md:gap-3 max-w-8xl ss:px-16">
              <div className="w-full md:w-1/2 space-y-6 px-4">
                <div
                  className="title text-black font-bond text-5xl py-4 font-poppins"
                  data-swiper-parallax="-300"
                >
                  <h3 className="text-4xl md:text-5xl font-bold font-Poppins">
                    Lithium Batteries
                  </h3>
                </div>
                <div
                  className="subtitle text-black font-semibold font-poppins"
                  data-swiper-parallax="-200"
                >
                  <h4>Power-based product</h4>
                </div>
                <div
                  className="text-xl text-slate-600 font-medium font-Rubik"
                  data-swiper-parallax="-100"
                >
                  <p>
                    Lithium batteries are a type of rechargeable battery that
                    has become the cornerstone of modern portable electronics,
                    electric vehicles, and renewable energy storage solutions.
                    They are preferred for their high energy density, long life
                    cycle, and relative lightness compared to other types of
                    rechargeable batteries.
                    <br /> <span className="uppercase font-medium">
                      Types:
                    </span>{" "}
                    Lithium-ion (Li-ion), Lithium Polymer (LiPo), Lithium Iron
                    Phosphate (LiFePO₄)
                  </p>
                </div>
                <MoreProductsButton />
              </div>
              <div className="w-full md:w-1/2 ">
                <img
                  src={Product1}
                  alt="img"
                  className="rounded-md h-[30rem] w-[100%] bg-cover bg-center"
                />
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default ProductsSlider;
