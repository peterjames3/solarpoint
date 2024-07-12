import {Link} from 'react-router-dom'
import logo from "../assets/Spm.svg"
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <section className="w-full bg-gray-800 ">
      <div className=" max-w-[1600px] mt-0 mx-auto py-16 px-9 grid  grid-cols-1 text-center ss:text-start  space-y-3 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300 ">

   
      <div className="">
        <Link to="/" className=" flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="logo"  className='  size-12 '/>
          <h1 className="text-3xl font-bold text-[#00df9a] hidden md:flex">SolarPointSystem..</h1>
        </Link>
        <p className="py-4 text-xl">
          At SolarPoint Systems, we harness the power of the sun to bring you
          clean, renewable energy solutions. Our commitment to sustainability
          drives us to innovate, ensuring that every home and business can
          achieve energy independence while contributing to a healthier planet.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a
            href="https://web.facebook.com/profile.php?id=61557063135392"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare
              size={30}
              className="hover:text-blue-700 transition-all delay-300 cursor-pointer"
            />
          </a>
          <a
            href="https://www.instagram.com/YourUsername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={30}
              className="hover:text-pink-600 transition-all delay-300 cursor-pointer"
            />
          </a>
          <a
            href="https://twitter.com/YourUsername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitterSquare
              size={30}
              className="hover:text-blue-400 transition-all delay-300 cursor-pointer"
            />
          </a>
        </div>
      </div>
      <div className=" flex-col-reverse ss:col-span-2 flex ss:flex-row justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400 text-2xl underline">Solutions</h6>
          <ul className="*:text-xl">
            <li className="py-2 text-sm">
              <Link to="/powerbackup" className="hover:underline">Power Backup</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/solutions" className="hover:underline">Solar LEDs</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/solarwaterpump" className='hover:underline'>Solar Water Pump</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/solarwaterheaters" className='hover:underline'>Solar Water Heaters</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/solarhybrid" className='hover:underline'>Solar Hybrid</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 text-2xl underline">Products</h6>
          <ul className='*:text-xl'>
            <li className="py-2 text-sm">
              <Link to="/products" className="hover:underline">Solar Panels</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/products" className="hover:underline">Inverters</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/products" className="hover:underline">Hybrid Inverters</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/products" className="hover:underline">Lithium Batteries</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 text-2xl underline">Company</h6>
          <ul className='*:text-xl'>
            <li className="py-2 text-sm">
              <Link to="/about" className='hover:underline'>About Us</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/blog" className='hover:underline'>Blog</Link>
            </li>
            <li className="py-2 text-sm">
              <Link to="/" className='hover:underline'>Home</Link>
            </li>
            </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 text-2xl underline">Contact Us</h6>
          <ul className="*:text-xl">
            <li className="py-2 text-sm font-medium">
              Apple wood, Ngong Road
            </li>
            <li className="py-2 text-sm"> Email: solarpointsystems1@gmail.com</li>
            <li className="py-2 text-sm">Tel: 0712741650 | 0703704062 </li>
            <li className="p-2 text-sm">Location: Nairobi Kenya</li>
           
          </ul>
        </div>
      </div>
     
      </div>
      <div className='max-w-[1400px]  text-center mt-0 mx-auto text-2xl text-white font-semibold'>© 2024 All right reserved by SolarPoint Systems.</div>
    </section>
  );
}

export default Footer;
