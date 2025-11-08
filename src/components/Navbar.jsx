import React, { useState } from 'react';
import logo from '../assets/icons/logo.png';
import { Link } from 'react-scroll';

// React Icons
import { FaXmark, FaBars } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsmenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "Blog", path: "blog" },
    { link: "About", path: "about" },
    { link: "Contact us", path: "contact" },
  ];

  return (
    <nav className="py-4 lg:px-14 px-8 fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex justify-between items-center text-base">
        {/* --- LEFT: Logo --- */}
        <a href="/" className="flex items-center space-x-4">
          <img
            src={logo}
            alt="logo"
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-base sm:text-lg md:text-xl font-roboto font-bold text-black">
              ROLLING HILLS TOWING
            </span>
            <span className="hidden sm:inline text-[10px] sm:text-xs md:text-sm font-roboto font-semibold text-black italic">
              Ready to assist you with the best towing business
            </span>
          </div>
        </a>

        {/* --- CENTER: Nav Items (Desktop) --- */}
        <ul className="hidden md:flex space-x-10 mx-auto">
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="active"
              key={path}
              className="block text-base text-gray-900 hover:text-yellow-400 font-medium cursor-pointer relative transition-colors"
            >
              {link}
            </Link>
          ))}
        </ul>

        {/* --- RIGHT: Call Button (Desktop only) --- */}
        <div className="hidden md:flex">
            <a
                   href="tel:+639123456789"
                   className="group flex items-center bg-gray-900 text-white font-semibold px-4 py-3 rounded-full 
                             hover:bg-yellow-400 transition-all w-full max-w-xs md:max-w-[250px] justify-center"
                 >
                   <FaPhoneAlt className="text-yellow-400 group-hover:text-white transition-colors duration-300" />
                   +1 (352) 717-8416
                 </a>
        </div>

        {/* --- MOBILE: Menu Toggle Button --- */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-neutralDGray focus:outline-none focus:text-gray-500"
          >
            {isMenuOpen ? (
              <FaXmark className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <div
        className={`space-y-4 px-4 mt-16 py-7 ${
          isMenuOpen ? "block fixed top-0 right-0 left-0 bg-white shadow-md" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            to={path}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            activeClass="active"
            key={path}
            className="block text-base text-black hover:text-yellow-400 font-medium transition-colors"
            onClick={() => setIsmenuOpen(false)}
          >
            {link}
          </Link>
        ))}

        {/* --- MOBILE: Contact Info --- */}
       
         <a
              href="tel:+639123456789"
              className="group mt-5 flex items-center bg-gray-900 text-white font-semibold px-4 py-3 rounded-full 
                        hover:bg-yellow-400 transition-all w-full max-w-xs md:max-w-[250px] justify-center"
            >
              <FaPhoneAlt className="text-yellow-400 group-hover:text-white transition-colors duration-300" />
              +1 (352) 717-8416
            </a>
      </div>
    </nav>
  );
};

export default Navbar;
