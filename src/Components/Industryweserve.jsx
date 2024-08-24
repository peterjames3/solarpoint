import Airportimg from "../assets/install..webp";
import  GetQuoteButton from "./GetQuoteButton"
import 'aos/dist/aos.css';

function Industryweserve() {

  return (
    <section className="w-full">
      <div className="w-full pb-4 flex flex-col items-center space-y-3 font-poppins">
        <h3 className="text-center text-3xl text-black  font-Poppins font-semibold pt-9">
          Switch Today
        </h3>
        <hr className="w-[10rem] border-b-[3px] rounded border-blue-700" />
        <h4 className="text-center text-4xl font-bold ">
          {" "}
          Switch to solar in four easy steps
        </h4>
      </div>

      <section className="w-full bg-cardBg  ">
        <div className="max-w-[1700px] mx-auto py-7 sm:px-10 flex flex-col-reverse md:flex-row gap-0 md:gap-2 min-h-8 ">
          <div className="flex row gap-2 w-full md:w-[70%] items-center justify-center  ">
            <div
              data-aos="fade-right"
              data-aos-delay="1200"
              data-aos-offset="50"
              className="flex flex-col bg-slate-300 items-center py-7 h-full  w-1/2"
            >
              <ul className="grid grid-cols-1 space-y-2  list-none items-baseline justify-center divide-y-2 divide-gray-500">
                <li className=" font-semibold  text-gray-500 ">
                  01. Get In Touch
                </li>
                <li className=" py-3 font-semibold text-gray-500 ">
                  02. Consultance
                </li>
                <li className="py-3 font-semibold text-gray-500 ">
                  03. Design and Installation
                </li>
                <li className=" py-3 font-semibold text-gray-500 ">
                  0.4 Solar On
                </li>
                <li className="py-3 font-semibold  text-gray-500 ">
                  05. Management
                </li>
              </ul>
            </div>
            <div className=" md:space-y-4 md:py-7 space-y-2 w-1/2 p-2">
              <h3 className="text-gray-500 font-semibold font-Roboto">01</h3>
              <h4 className="md:text-3xl text-black font-mediun font-Inter font-medium">
                Solar Power at everywhere!
              </h4>
              <p className="md:text-[1.1rem]">
                {" "}
                01. Few minutes on the phone with one of our experienced solar
                energy consultant is all it takes for begin.{" "}
              </p>
              <p className="md:text-[1.1rem]">
                02. We&apos;ll design a custome solar energy system that fits
                your electricity needs.
              </p>
              <p className="md:text-[1.1rem]">
                03. Turn on your new solar energy system then sit back and watch
                the saving add up!
              </p>
              <p className="md:text-[1.1rem]">
                04. We even monitor the systems remotely and take up full
                maintenance for best performance.
              </p>
              <GetQuoteButton />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="1200"
            data-aos-offset="50"
            className=" w-full md:w-[49%] flex-grow-1 relative bg-gradient-to-r from-slate-800 to-gray-500"
          >
            <img
              src={Airportimg}
              alt="solar at airport"
              loading="lazy"
              className="w-full h-full bg-cover mix-blend-overlay"
            />
            <div className="absolute top-[40%] md:top-[60%] w-full bg-transparent divide-y-2 divide-slate-300 px-3">
              <nav className="flex flex-row justify-between items-center text-white mb-2">
                <h3 className=" font-semibold font-Inter text-2xl">
                  Installition in Process
                </h3>
                <h4 className="font-thin text-3xl">01</h4>
              </nav>
              <div className="flex flex-row justify-between items-center px-2">
                <nav className="w-1/2">
                  <h4 className="font-inter font-thin text-white">investors</h4>
                  <p className="font-semibold text-white">
                    15 x Fronius Eco 27kW
                  </p>
                </nav>
                <nav className="w-1/2">
                  <h4 className="font-inter font-thin text-white">Panels</h4>
                  <p className="font-semibold text-white">
                    1330 x 355W Solar Panels
                  </p>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Industryweserve;
