import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Spm.svg";
import { MdAccessTime, MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import QuotationModal from "./QuotationModal";
import { debounce } from "../utils/debounce";
import { socials } from "../socialLinks";
import { navLinks } from "../navLinks";
import { solutionsLinks } from "../solutinsLinks";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
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
      className={`fixed left-0 top-0 z-10 mb-2 w-full flex-row items-center justify-between px-7 py-4 ${
        isVisible ? "bg-[#060606]" : "custom-bg-transparent"
      } border-b border-slate-700`}
    >
      {/* Top Bar */}
      <div className="mx-auto hidden max-w-[1400px] items-center justify-between px-2 pb-5 text-white sm:flex">
        <div className="items-center gap-7 sm:flex">
          <nav className="flex items-center gap-1 text-xl">
            <MdOutlineEmail className="text-secondaryBg" />{" "}
            <span>solarpointsystems1@gmail.com</span>{" "}
          </nav>
          <nav className="hidden items-center gap-1 text-xl md:flex">
            <MdAccessTime className="text-secondaryBg" />
            <span>Mon - Fri: 9:30 AM - 5:30 PM </span>
          </nav>
          <nav className="hidden items-center gap-1 text-xl ss:flex">
            <MdOutlinePhone className="text-secondaryBg" />
            <span>+254 703704062 </span>
          </nav>
        </div>
        {/*Social Links */}
        <div className="flex items-center gap-4">
          <div className="text-xl">Follow on:</div>
          {socials.map((link, index) => (
            <a key={index}>
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon
                  size={24}
                  className={`cursor-pointer transition-all delay-300 ${link.hoverClass}`}
                />
              </Link>
            </a>
          ))}
        </div>
      </div>
      {/* Main Navbar */}
      <nav className="mx-auto mt-0 flex w-full items-center justify-between md:max-w-[1400px] md:gap-[5rem]">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-3xl font-bold text-green-600 hover:cursor-pointer"
        >
          <img src={logo} alt="logo" className="size-12 flex-1" />
          <nav className="hidden text-[1.25rem] xl:flex">
            SolarPointSystems E.A
          </nav>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden mix-blend-difference sm:block">
          <ul className="flex flex-row font-normal xs:space-x-5 sm:space-x-7 md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  className="cursor-pointer text-[1.1rem] font-medium text-white transition-all delay-300 ease-out hover:text-brandC"
                  to={link.path}
                  style={location.pathname === link.to ? activeStyle : null}
                  onClick={closeMenu} // Ensure the menu closes on navigation
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <div className="relative">
              <Link
                className="cursor-pointer text-[1.1rem] font-medium text-white transition-all delay-300 ease-out hover:text-brandC"
                onMouseOver={toggleDropdown}
              >
                SOLUTIONS
              </Link>
              {isDropdownOpen && (
                <div className="fadeIn absolute -left-10 mt-7 w-[20rem] divide-y-2 divide-slate-500 rounded bg-slate-600 font-poppins font-medium shadow-md shadow-black">
                  {/* Map over the solutionsLinks array */}
                  {solutionsLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="block px-4 py-2 text-2xl text-black hover:bg-gray-300"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              className="cursor-pointer text-[1.1rem] font-medium text-white transition-all delay-300 ease-out hover:text-brandC"
              to="/contact"
              style={location.pathname === "/contact" ? activeStyle : null}
              onClick={closeMenu} // Ensure the menu closes on navigation
            >
              CONTACT
            </Link>{" "}
          </ul>
        </nav>
        <nav>
          <button
            onClick={handleOpen}
            type="button" // Changed to "button" because this isn't submitting a form directly
            className="btn--quote"
          >
            Get Quote
          </button>
          <div className="h-1">
            <QuotationModal isOpen={isOpen} onClose={handleClose} />
          </div>
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
          <nav className="z-100 fixed left-0 top-0 h-screen w-[60%] border-r border-r-gray-900 bg-black duration-500 ease-in-out">
            <Link
              to="/"
              className="flex items-center gap-2 px-4 pt-7 text-2xl font-medium text-[#00df9a] transition-all delay-300 ease-out hover:cursor-pointer"
              onClick={closeMenu}
            >
              <img
                src={logo}
                alt="logo"
                loading="lazy"
                className="flex size-12 items-center gap-2"
              />
            </Link>
            <ul className="flex flex-col space-y-10 px-4 pt-10 font-normal">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className="cursor-pointer text-[1.1rem] font-medium text-white transition-all delay-300 ease-out hover:text-brandC"
                    to={link.path}
                    style={location.pathname === link.to ? activeStyle : null}
                    onClick={closeMenu} // Ensure the menu closes on navigation
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

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
                    {/* Map over the solutionsLinks array */}
                    {solutionsLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.path}
                        className="block px-4 py-2 text-2xl text-black hover:bg-gray-300"
                        onClick={closeMenu}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

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
