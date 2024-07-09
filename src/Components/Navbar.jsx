import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Spm.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    fontWeight: 'bold',
    color: 'rgb(29 78 216)',
  };

  return (
    <header className="flex fixed top-0 left-0 w-full flex-row justify-between items-center mb-2 py-4 px-7 z-10 shadow-sm shadow-black bg-gradient-to-r from-slate-500 to-gray-800">
      <nav className="w-full md:max-w-[1400px] mt-0 mx-auto md:gap-[5rem] flex items-center justify-between">
        <Link to="/" className="text-3xl flex items-center gap-2 font-bold text-[#00df9a] hover:cursor-pointer">
          <img src={logo} alt="logo" className="size-12 flex-1" />
          <h1 className="hidden md:flex">SolarPoint Systems</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden sm:block mix-blend-difference">
          <ul className="flex flex-row xs:space-x-5 sm:space-x-7 md:space-x-10 font-normal">
            <Link className="text-white font-medium cursor-pointer text-xl hover:text-blue-700 transition-all delay-300 ease-out"
              to="/" style={location.pathname === "/" ? activeStyle : null}>
              HOME
            </Link>
            <Link className="text-white font-medium cursor-pointer text-xl hover:text-blue-700 transition-all delay-300 ease-out"
              to="/about" style={location.pathname === "/about" ? activeStyle : null}>
              ABOUT US
            </Link>
            <Link className="text-white font-medium cursor-pointer text-xl hover:text-blue-700 transition-all delay-300 ease-out"
              to="/products" style={location.pathname === "/products" ? activeStyle : null}>
              PRODUCTS
            </Link>
            <div className="relative">
              <Link className="text-white font-medium cursor-pointer text-xl hover:text-blue-700 transition-all delay-300 ease-out"
                to="/solutions" onClick={toggleDropdown}>
                SOLUTIONS
              </Link>
              {isDropdownOpen && (
                <div className="fadeIn absolute -left-10 mt-7 w-[20rem] font-medium font-poppins divide-y-2 bg-slate-400 shadow-md shadow-black rounded">
                  <Link to="/powerbackup" className="block text-2xl px-4 py-2 text-black hover:bg-gray-300" onClick={closeMenu}>Power Backup</Link>
                  <Link to="/solutions" className="block text-2xl px-4 py-2 text-black hover:bg-gray-300" onClick={closeMenu}>Solar LEDs</Link>
                  <Link to="/solarwaterpump" className="block text-2xl px-4 py-2 text-black hover:bg-gray-300" onClick={closeMenu}>Solar Water Pump</Link>
                  <Link to="/solarhybrid" className="block text-2xl px-4 py-2 text-black hover:bg-gray-300" onClick={closeMenu}>Solar Hybrid</Link>
                  <Link to="/solarwaterheaters" className="block text-2xl px-4 py-2 text-black hover:bg-gray-300" onClick={closeMenu}>Solar Water Heaters</Link>
                </div>
              )}
            </div>
            <Link className="text-white font-medium cursor-pointer text-xl hover:text-blue-700 transition-all delay-300 ease-out"
              to="/blog" style={location.pathname === "/blog" ? activeStyle : null}>
              BLOG
            </Link>
            <Link className="text-white font-medium cursor-pointer text-xl hover:text-blue-700 transition-all delay-300 ease-out"
              to="/contact" style={location.pathname === "/contact" ? activeStyle : null}>
              CONTACT
            </Link>
          </ul>
        </nav>
        
        {/* Mobile Nav Toggle */}
        <div onClick={handleNav} className="sm:hidden text-white hover:text-green-700 cursor-pointer transition-all delay-300">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        
        {/* Mobile Navigation */}
        {nav && (
          <nav className="fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500">
            <Link to="/" className="flex gap-2 items-center text-2xl text-[#00df9a] font-medium hover:cursor-pointer transition-all delay-300 ease-out pt-7 px-4" onClick={closeMenu}>
              <img src={logo} alt="logo" className="flex items-center gap-2 size-12" />
            </Link>
            <ul className="flex flex-col space-y-10 font-normal pt-10 px-4">
              <Link to="/" className="text-white font-medium cursor-pointer hover:text-blue-700 transition-all delay-300 ease-out" onClick={closeMenu} style={location.pathname === "/" ? activeStyle : null}>
                HOME
              </Link>
              <Link to="/about" className="text-white font-medium cursor-pointer hover:text-blue-700 transition-all delay-300 ease-out" onClick={closeMenu} style={location.pathname === "/about" ? activeStyle : null}>
                ABOUT US
              </Link>
              <Link to="/products" className="text-white font-medium cursor-pointer hover:text-blue-700 transition-all delay-300 ease-out" onClick={closeMenu} style={location.pathname === "/products" ? activeStyle : null}>
                PRODUCTS
              </Link>
              <div className="relative">
                <Link className="text-white font-medium cursor-pointer hover:text-blue-700 transition-all delay-300 ease-out" to="/solutions" onClick={toggleDropdown}>
                  SOLUTIONS
                </Link>
                {isDropdownOpen && (
                  <div className="fadeIn absolute left-5 mt-2 w-[20rem] text-white font-medium font-poppins divide-y-2 bg-gray-700 shadow-md shadow-black rounded">
                    <Link to="/powerbackup" className="block text-2xl px-4 py-2 hover:bg-gray-300" onClick={closeMenu}>Power Backup</Link>
                    <Link to="/solarleds" className="block text-2xl px-4 py-2 hover:bg-gray-300" onClick={closeMenu}>Solar LEDs</Link>
                    <Link to="/solarwaterpump" className="block text-2xl px-4 py-2 hover:bg-gray-300" onClick={closeMenu}>Solar Water Pump</Link>
                    <Link to="/solarhybrid" className="block text-2xl px-4 py-2 hover:bg-gray-300" onClick={closeMenu}>Solar Hybrid</Link>
                    <Link to="/solarwaterheaters" className="block text-2xl px-4 py-2 hover:bg-gray-300" onClick={closeMenu}>Solar Water Heaters</Link>
                  </div>
                )}
              </div>
              <Link to="/blog" className="text-white font-medium cursor-pointer hover:text-blue-700 transition-all delay-300 ease-out" onClick={closeMenu} style={location.pathname === "/blog" ? activeStyle : null}>
                BLOG
              </Link>
              <Link to="/contact" className="text-white font-medium cursor-pointer hover:text-blue-700 transition-all delay-300 ease-out" onClick={closeMenu} style={location.pathname === "/contact" ? activeStyle : null}>
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
