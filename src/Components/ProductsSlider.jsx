import { Carousel } from "flowbite-react";

import Jackery from "../assets/Jackery..webp";
import LED from "../assets/30LED..webp";
import Product1 from "../assets/Lifetime _ Built-in BMS..webp";
import Roomn from "../assets/amerisolar-280w..webp";
import MoreProductsButton from "../Components/MoreProductsButton";

function ProductsSlider() {
  return (
    <section className="bg-cardBg pb-4">
      <div className="flex w-full flex-col items-center space-y-3">
        <h3 className="pt-9 text-center font-poppins text-3xl font-bold text-black">
          Products
        </h3>
        <hr className="w-[10rem] rounded border-b-[3px] border-textColor" />
        <h4 className="text-center font-poppins text-4xl font-medium">
          Discover Our Premier Product Collection
        </h4>
      </div>
      <div className="wrapper h-[35rem]">
        <Carousel slide={false} className="">
          <section className="max-w-8xl mx-auto mt-2 flex flex-col-reverse gap-0 px-2 xs:flex-col-reverse ss:flex-col-reverse ss:gap-2 ss:px-16 sm:flex-row md:flex-row md:gap-3">
            <div className="w-full space-y-6 px-4 md:w-1/2">
              <div className="title font-bond py-4 font-poppins text-5xl text-black">
                <h3 className="font-Poppins text-4xl font-bold md:text-5xl">
                  Jackery Solar is one of the best our product
                </h3>
              </div>
              <div className="subtitle font-poppins font-semibold text-black">
                <p>Power-based product</p>
              </div>
              <div className="font-Rubik text-xl font-medium text-black">
                <p>
                  Jackery Solar Generator 15000, explorer 1500 and 2 XSolarsaga
                  1-- X solar panel with 3X110V/18000W AC outlet, solar mobile
                  lithium battery pack for outdoor RV/Van camping,
                  overlanding...
                  <br />{" "}
                  <span className="font-medium uppercase">
                    Superior solar charging:
                  </span>{" "}
                  Intergrate and combine the Explorer 1500 and 2 SolarSaga
                </p>
              </div>
              <MoreProductsButton />
            </div>

            <div className="w-full md:w-1/2">
              <img
                src={Jackery}
                alt="img"
                loading="lazy"
                className="object-fit h-[30rem] w-[100%] rounded-md"
              />
            </div>
          </section>
          <section className="max-w-8xl mx-auto mt-2 flex flex-col-reverse gap-0 px-2 xs:flex-col-reverse ss:flex-col-reverse ss:gap-2 ss:px-16 sm:flex-row md:flex-row md:gap-3">
            <div className="w-full space-y-6 px-4 md:w-1/2">
              <div className="title font-bond py-4 font-poppins text-5xl">
                <h3 className="font-Poppins text-4xl font-bold text-black md:text-5xl">
                  280W amerisolar Solar Panel
                </h3>
              </div>
              <div className="subtitle font-poppins font-semibold text-black">
                <p>Power-based product</p>
              </div>
              <div className="font-Rubik text-xl font-medium text-black">
                <p>
                  Amerisolar solar panel manufacturer that has been in the
                  industry for over 25 years. They produce a wide range of
                  photovoltaic (PV) modules suitable for all types of
                  installations, including residential, commercial, and
                  industrial projects. Their products are known for being:
                  <br /> <span className="font-medium uppercase">
                    Reliable
                  </span>{" "}
                  Efficient, and Competitively priced
                </p>
              </div>
              <MoreProductsButton />
            </div>

            <div className="w-full md:w-1/2">
              <img
                src={Roomn}
                alt="img"
                loading="lazy"
                className="object-fit h-[30rem] w-[100%] rounded-md"
              />
            </div>
          </section>
          <section className="max-w-8xl max-w-8xl mx-auto mt-2 flex flex-col-reverse gap-0 px-2 xs:flex-col-reverse ss:flex-col-reverse ss:gap-2 ss:px-16 sm:flex-row md:flex-row md:gap-3">
            <div className="w-full space-y-6 px-4 md:w-1/2">
              <div className="title font-bond py-4 font-poppins text-5xl text-black">
                <h3 className="font-Poppins text-4xl font-bold md:text-5xl">
                  High-Power LEDs
                </h3>
              </div>
              <div className="subtitle font-poppins font-semibold text-black">
                <h4>Power-based product</h4>
              </div>
              <div className="font-Rubik text-xl font-medium text-black">
                <p>
                  Designed to emit a greater amount of light, high-power LEDs
                  are used in lighting applications where high brightness is
                  required. These LEDs require heat sinks to manage the higher
                  heat output associated with their operation. They are used in
                  street lights, high-bay lighting, and automotive headlights.
                  <br />{" "}
                  <span className="font-medium uppercase">
                    Superior solar charging:
                  </span>{" "}
                  Intergrate and combine the Explorer 1500 and 2 SolarSaga
                </p>
              </div>
              <MoreProductsButton />
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={LED}
                alt="img"
                loading="lazy"
                className="object-fit h-[30rem] w-[100%] rounded-md"
              />
            </div>
          </section>
          <section className="max-w-8xl mx-auto mt-2 flex flex-col-reverse gap-0 px-2 xs:flex-col-reverse ss:flex-col-reverse ss:gap-2 ss:px-16 sm:flex-row md:flex-row md:gap-3">
            <div className="w-full space-y-6 px-4 md:w-1/2">
              <div className="title font-bond py-4 font-poppins text-5xl text-black">
                <h3 className="font-Poppins text-4xl font-bold md:text-5xl">
                  Lithium Batteries
                </h3>
              </div>
              <div className="subtitle font-poppins font-semibold text-black">
                <h4>Power-based product</h4>
              </div>
              <div className="font-Rubik text-xl font-medium text-black">
                <p>
                  Lithium batteries are a type of rechargeable battery that has
                  become the cornerstone of modern portable electronics,
                  electric vehicles, and renewable energy storage solutions.
                  They are preferred for their high energy density, long life
                  cycle, and relative lightness compared to other types of
                  rechargeable batteries.
                  <br /> <span className="font-medium uppercase">
                    Types:
                  </span>{" "}
                  Lithium-ion (Li-ion), Lithium Polymer (LiPo), Lithium Iron
                  Phosphate (LiFePO₄)
                </p>
              </div>
              <MoreProductsButton />
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={Product1}
                alt="img"
                className="h-[30rem] w-[100%] rounded-md bg-cover bg-center"
              />
            </div>
          </section>
        </Carousel>
      </div>
    </section>
  );
}

export default ProductsSlider;
