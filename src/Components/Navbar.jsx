import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Spm.svg";
import { MdAccessTime, MdOutlineEmail } from "react-icons/md";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

// Utility function for debouncing
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  const closeMenu = () => {
    setNav(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const activeStyle = {
    fontWeight: "bold",
    color: "#16a34a",
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setNav(false);
      }
    };

    const toggleVisibility = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Debounced versions of event handlers
    const debouncedResize = debounce(handleResize, 100);
    const debouncedScroll = debounce(toggleVisibility, 100);

    window.addEventListener("resize", debouncedResize);
    window.addEventListener("scroll", debouncedScroll);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-10 mb-2 w-full flex-row items-center justify-between px-7 py-3 ${
        isVisible ? "bg-[#060606]" : "custom-bg-transparent"
      } border-b border-slate-700`}
    >
      <div className="mx-auto max-w-[1400px] items-center justify-between px-2 py-1 text-white ss:flex">
        <div className="items-center gap-7 sm:flex">
          <nav className="flex items-center gap-1 text-xl">
            <MdOutlineEmail className="text-secondaryBg" />{" "}
            <span>solarpointsystems1@gmail.com</span>{" "}
          </nav>
          <nav className="hidden items-center gap-1 text-xl ss:flex">
            <MdAccessTime className="text-secondaryBg" />
            <span>Mon - Fri: 9:30 AM - 5:30 PM </span>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-xl">Follow on:</div>
          <div className="my-6 flex justify-between gap-3">
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
      </div>

      <nav className="mx-auto mt-0 flex w-full items-center justify-between md:max-w-[1400px] md:gap-[5rem]">
        <Link
          to="/"
          className="flex items-center gap-2 text-3xl font-bold text-green-600 hover:cursor-pointer"
        >
          <img src={logo} alt="logo" className="size-12 flex-1" />
          <nav className="hidden md:flex">SolarPoint Systems E.A</nav>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden mix-blend-difference sm:block">
          <ul className="flex flex-row font-normal xs:space-x-5 sm:space-x-7 md:space-x-10">
            <Link
              className="cursor-pointer text-xl font-medium text-white transition-all delay-300 ease-out hover:text-brandC"
              to="/"
              style={location.pathname === "/" ? activeStyle : null}
              onClick={closeMenu} // Ensure the menu closes on navigation
            >
              HOME
            </Link>
            <Link
              className="cursor-pointer text-xl font-medium text-white transition-all delay-300 ease-out hover:text-brandC"
              to="/about"
              style={location.pathname === "/about" ? activeStyle : null}
              onClick={closeMenu} // Ensure the menu closes on navigation
            >
              ABOUT
            </Link>
            <Link
              className="cursor-pointer text-xl font-medium text-white transition-all delay-300 ease-out hover:text-brandC"
              to="/products"
              style={location.pathname === "/products" ? activeStyle : null}
              onClick={closeMenu} // Ensure the menu closes on navigation
            >
              PRODUCTS
            </Link>
            <div className="relative">
              <Link
                className="cursor-pointer text-xl font-medium text-white transition-all delay-300 ease-out hover:text-brandC"
                onMouseOver={toggleDropdown}
              >
                SOLUTIONS
              </Link>
              {isDropdownOpen && (
                <div className="fadeIn absolute -left-10 mt-7 w-[20rem] divide-y-2 divide-slate-500 rounded bg-slate-600 font-poppins font-medium shadow-md shadow-black">
                  <Link
                    to="/powerbackup"
                    className="block px-4 py-2 text-2xl text-black hover:bg-gray-300"
                    onClick={closeMenu}
                  >
                    Power Backup
                  </Link>
                  <Link
                    to="/solutions"
                    className="block px-4 py-2 text-2xl text-black hover:bg-gray-300"
                    onClick={closeMenu}
                  >
                    Solar LEDs
                  </Link>
                  <Link
                    to="/solarwaterpump"
                    className="block px-4 py-2 text-2xl text-black hover:bg-gray-300"
                    onClick={closeMenu}
                  >
                    Solar Water Pump
                  </Link>
                  <Link
                    to="/solarhybrid"
                    className="block px-4 py-2 text-2xl text-black hover:bg-gray-300"
                    onClick={closeMenu}
                  >
                    Solar Hybrid
                  </Link>
                  <Link
                    to="/solarwaterheaters"
                    className="block px-4 py-2 text-2xl text-black hover:bg-gray-300"
                    onClick={closeMenu}
                  >
                    Solar Water Heaters
                  </Link>
                </div>
              )}
            </div>
              <Link
              className="cursor-pointer text-xl font-medium text-white transition-all delay-300 ease-out hover:text-brandC"
              to="/projects"
              style={location.pathname === "/projects" ? activeStyle : null}
              onClick={closeMenu} // Ensure the menu closes on navigation
            >
               PROJECTS
            </Link>
            <Link
              className="cursor-pointer text-xl font-medium text-white transition-all delay-300 ease-out hover:text-brandC"
              to="/blog"
              style={location.pathname === "/blog" ? activeStyle : null}
              onClick={closeMenu} // Ensure the menu closes on navigation
            >
              BLOG
            </Link>
            <Link
              className="cursor-pointer text-xl font-medium text-white transition-all delay-300 ease-out hover:text-brandC"
              to="/contact"
              style={location.pathname === "/contact" ? activeStyle : null}
              onClick={closeMenu} // Ensure the menu closes on navigation
            >
              CONTACT
            </Link>
          </ul>
        </nav>

        {/* Mobile Nav Toggle */}
        <div
          onClick={handleNav}
          className="cursor-pointer text-white transition-all delay-300 hover:text-green-700 sm:hidden"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile Navigation */}
        {nav && (
          <nav className="z-100 fixed left-0 top-0 h-screen w-[60%] border-r pt-16 border-r-gray-900 bg-black duration-500 ease-in-out">
            <Link
              to="/"
              className="flex items-center gap-2 px-4 pt-7 text-2xl font-medium text-[#00df9a] transition-all delay-300 ease-out hover:cursor-pointer"
              onClick={closeMenu}
            >
              <img
                src={logo}
                alt="logo"
                className="flex size-12 items-center gap-2"
              />
            </Link>
            <ul className="flex flex-col space-y-10 px-4 pt-10 font-normal">
              <Link
                to="/"
                className="cursor-pointer font-medium text-white transition-all delay-300 ease-out hover:text-brandC"
                onClick={closeMenu}
                style={location.pathname === "/" ? activeStyle : null}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="cursor-pointer font-medium text-white transition-all delay-300 ease-out hover:text-brandC"
                onClick={closeMenu}
                style={location.pathname === "/about" ? activeStyle : null}
              >
                ABOUT US
              </Link>
              <Link
                to="/products"
                className="cursor-pointer font-medium text-white transition-all delay-300 ease-out hover:text-brandC"
                onClick={closeMenu}
                style={location.pathname === "/products" ? activeStyle : null}
              >
                PRODUCTS
              </Link>
              <div className="relative">
                <Link
                  className="cursor-pointer font-medium text-white transition-all delay-300 ease-out hover:text-brandC"
                  to="/solutions"
                  onClick={toggleDropdown}
                >
                  SOLUTIONS
                </Link>
                {isDropdownOpen && (
                  <div className="fadeIn absolute left-5 mt-2 w-[20rem] divide-y-2 rounded bg-gray-700 font-poppins font-medium text-white shadow-md shadow-black">
                    <Link
                      to="/powerbackup"
                      className="block px-4 py-2 text-2xl hover:bg-gray-300"
                      onClick={closeMenu}
                    >
                      Power Backup
                    </Link>
                    <Link
                      to="/solarleds"
                      className="block px-4 py-2 text-2xl hover:bg-gray-300"
                      onClick={closeMenu}
                    >
                      Solar LEDs
                    </Link>
                    <Link
                      to="/solarwaterpump"
                      className="block px-4 py-2 text-2xl hover:bg-gray-300"
                      onClick={closeMenu}
                    >
                      Solar Water Pump
                    </Link>
                    <Link
                      to="/solarhybrid"
                      className="block px-4 py-2 text-2xl hover:bg-gray-300"
                      onClick={closeMenu}
                    >
                      Solar Hybrid
                    </Link>
                    <Link
                      to="/solarwaterheaters"
                      className="block px-4 py-2 text-2xl hover:bg-gray-300"
                      onClick={closeMenu}
                    >
                      Solar Water Heaters
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/blog"
                className="cursor-pointer font-medium text-white transition-all delay-300 ease-out hover:text-brandC"
                onClick={closeMenu}
                style={location.pathname === "/blog" ? activeStyle : null}
              >
                BLOG
              </Link>
              <Link
                to="/contact"
                className="cursor-pointer font-medium text-white transition-all delay-300 ease-out hover:text-brandC"
                onClick={closeMenu}
                style={location.pathname === "/contact" ? activeStyle : null}
              >
                CONTACT
              </Link>
            </ul>
          </nav>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
