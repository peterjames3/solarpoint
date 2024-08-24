import { Link } from "react-router-dom";
import logo from "../assets/Spm.svg";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <section className="w-full bg-black">
      <div className="mx-auto mt-0 grid max-w-[1400px] grid-cols-1 gap-8 space-y-3 px-9 py-16 text-center text-gray-300 ss:text-start sm:grid-cols-2 lg:grid-cols-3">
        <div className="">
          <Link to="/" className="flex cursor-pointer items-center gap-2">
            <img src={logo} alt="logo" className="size-12" />
            <h3 className="hidden text-3xl font-bold text-brandC md:flex">
              SolarPointSystem..
            </h3>
          </Link>
          <p className="py-4 font-Rubik text-xl">
            At SolarPoint Systems, we harness the power of the sun to bring you
            clean, renewable energy solutions. Our commitment to sustainability
            drives us to innovate, ensuring that every home and business can
            achieve energy independence.
          </p>
          <div className="my-6 flex justify-between md:w-[75%]">
            <a
              href="https://web.facebook.com/profile.php?id=61557063135392"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare
                size={30}
                className="cursor-pointer transition-all delay-300 hover:text-blue-700"
              />
            </a>
            <a
              href="https://www.instagram.com/sola21759?igsh=MXc5bTN0Mnk1a3g5dw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                className="cursor-pointer transition-all delay-300 hover:text-pink-600"
              />
            </a>
            <a
              href="https://x.com/Solarsystems_1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitterSquare
                size={30}
                className="cursor-pointer transition-all delay-300 hover:text-blue-400"
              />
            </a>
          </div>
        </div>
        <div className="mt-6 flex flex-col-reverse justify-between ss:col-span-2 ss:flex-row">
          <div>
            <h6 className="text-2xl font-medium text-brandC underline">
              Solutions
            </h6>
            <ul className="*font-Rubik *:text-xl">
              <li className="py-2 text-sm">
                <Link to="/powerbackup" className="hover:underline">
                  Power Backup
                </Link>
              </li>
              <li className="py-2 text-sm">
                <Link to="/solutions" className="hover:underline">
                  Solar LEDs
                </Link>
              </li>
              <li className="py-2 text-sm">
                <Link to="/solarwaterpump" className="hover:underline">
                  Solar Water Pump
                </Link>
              </li>
              <li className="py-2 text-sm">
                <Link to="/solarwaterheaters" className="hover:underline">
                  Solar Water Heaters
                </Link>
              </li>
              <li className="py-2 text-sm">
                <Link to="/solarhybrid" className="hover:underline">
                  Solar Hybrid
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-2xl font-medium text-brandC underline">
              Products
            </h6>
            <ul className="*:text-xl">
              <li className="py-2 text-sm">
                <Link to="/products" className="hover:underline">
                  Solar Panels
                </Link>
              </li>
              <li className="py-2 text-sm">
                <Link to="/products" className="hover:underline">
                  Inverters
                </Link>
              </li>
              <li className="py-2 text-sm">
                <Link to="/products" className="hover:underline">
                  Hybrid Inverters
                </Link>
              </li>
              <li className="py-2 text-sm">
                <Link to="/products" className="hover:underline">
                  Lithium Batteries
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-2xl font-medium text-brandC underline">
              Company
            </h6>
            <ul className="*:text-xl">
              <li className="py-2 text-sm">
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="py-2 text-sm">
                <Link to="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li className="py-2 text-sm">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-2xl font-medium text-brandC underline">
              Contact Us
            </h6>
            <ul className="*:text-xl">
              <li className="py-2 text-sm font-medium">
                Apple wood, Ngong Road
              </li>
              <li className="py-2 text-sm">
                {" "}
                Email: solarpointsystems1@gmail.com
              </li>
              <li className="py-2 text-sm">Tel: 0712741650 | 0703704062 </li>
              <li className="p-2 text-sm">Location: Nairobi Kenya</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-0 max-w-[1400px] text-center text-2xl font-semibold text-white">
        © 2024 All right reserved by SolarPoint Systems.
      </div>
    </section>
  );
}

export default Footer;
