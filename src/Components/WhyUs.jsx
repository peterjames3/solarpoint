import { TbSquareCheckFilled } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import UsImg from "../assets/factory.webp";

function Whyychooseus() {
  return (
    <section
      /*   data-aos="fade-up"
      data-aos-duration="3000" */
      className="my-10 w-full bg-cardBg py-6"
    >
      <div className="wrapper flex min-h-[28rem] flex-col px-5 sm:flex-row sm:gap-4 md:flex-row md:gap-5 md:px-7">
        <div
          data-aos="fade-right"
          data-aos-delay="1300"
          data-aos-offset="50"
          className="relative w-full overflow-hidden rounded-md bg-gradient-to-r from-slate-800 to-gray-500 xs:w-full sm:w-[50%] md:w-[50%]"
        >
          <img
            src={UsImg}
            alt="man working"
            loading="lazy"
            className="h-full w-full object-cover mix-blend-overlay"
          />
          <div className="absolute left-[0%] top-[2%] min-h-6 space-y-5 px-2 text-white">
            <nav className="pt-3 text-4xl text-white">
              <VscWorkspaceTrusted />
            </nav>
            <p className="font-Poppins">
              Trusted <br></br>Service
            </p>
          </div>
        </div>
        <div className="font-Poppins animate-puls w-full space-y-6 px-2 py-2 xs:w-full sm:w-[50%] md:w-[50%] md:px-3">
          <h2
            data-aos="fade-pop"
            data-aos-delay="1000"
            data-aos-offset="50"
            className="pt-2 font-poppins text-3xl font-bold"
          >
            Why Choose us?
          </h2>
          <hr
            data-aos="fade-pop"
            data-aos-delay="1000"
            data-aos-offset="50"
            className="border-b-2 border-blue-700"
          />
          <p
            data-aos="fade-pop"
            data-aos-delay="1200"
            data-aos-offset="50"
            className="font-Rubik text-xl leading-[2.5rem] text-gray-900"
          >
            Unbeatable service, quality installations, and experience Having the
            correct equipment installed, and calculating the right sized solar
            array to match the power needs for any home or business requires
            technical knowledge, planning, product knowledge, and
            expertise.There is no substitute for experience when getting this
            right, and we are the most qualified, and the most experienced solar
            installation team in Kenya.
          </p>
          <div
            data-aos="fade-pop"
            data-aos-delay="1200"
            data-aos-offset="50"
            className="flex flex-col space-y-3 text-start font-Rubik font-medium"
          >
            <div className="text-Rubik flex flex-row items-center">
              <span className="px-2 text-brandC">
                <TbSquareCheckFilled aria-label="Feature checked" />
              </span>
              <span className="text-black">Reduce energy costs</span>
            </div>
            <div className="flex flex-row items-center">
              <span className="px-2 text-brandC">
                <TbSquareCheckFilled aria-label="Feature checked" />
              </span>
              <span>Increase productivity,</span>
            </div>
            <div className="flex flex-row items-center">
              <span className="px-2 text-brandC">
                <TbSquareCheckFilled aria-label="Feature checked" />
              </span>
              <span>Contribute to a cleaner environment.</span>
            </div>
            <div className="flex flex-row items-center">
              <span className="px-2 text-brandC">
                <TbSquareCheckFilled aria-label="Feature checked" />
              </span>
              <span>Great Return On Investments.</span>
            </div>
            <div className="flex flex-row items-center">
              <span className="px-2 text-brandC">
                <TbSquareCheckFilled aria-label="Feature checked" />
              </span>
              <span>Hassle Free Install.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whyychooseus;
