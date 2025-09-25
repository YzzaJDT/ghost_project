import React, { useEffect, useState } from 'react';
import logo from '../assets/icons/logo.png';
import { Link } from 'react-scroll';

//react icons
import { FaXmark, FaBars } from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);

  //set Toggle Menu
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
    
      <nav className="py-4 lg:px-14 px-14 fixed top-0 left-0 right-0 bg-white shadow-md z-50" >
        <div className="flex justify-between items-center text-base">
          {/* Logo + Company Name */}
          <a href="/" className="flex items-center space-x-4">
            <img
              src={logo}
              alt="logo"
              className="h-12 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg font-roboto font-bold text-black ">
                ROLLING HILLS TOWING
              </span>
              <span className="text-xs font-roboto font-semibold text-black italic">
                Ready to assist you with the best towing business
              </span>
            </div>
          </a>

          {/* nav items for large device */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                key={path}
                className="block text-base text-gray-900 hover:text-yellow-400 first:font-medium cursor-pointer relative"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* menu btn for only mobile devices */}
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

        {/* nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0 bg-white" : "hidden"
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
              className="block text-base text-black hover:text-yellow-400 first:font-medium relative"
              onClick={() => setIsmenuOpen(false)} // closes menu on click
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    
  );
};

export default Navbar;
