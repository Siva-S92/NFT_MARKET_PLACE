import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const navLinks = [
    "Home",
    "Market",
    "Explore",
    "Exhibition",
    "Artists&Collectors",
  ];

  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="p-4 bg-slate-900 text-white">
      <div className="container max-w-screen-xl mx-auto relative">
        {/* flex-container */}
        <div className="flex justify-between items-center text-white">
          {/* logo */}
          <a
            href="/"
            className="text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400"
          >
            <span>NFT </span>Market
          </a>

          {/* menuitems */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href=""
                className="hover:text-indigo-600 duration-200 ease-in-out"
              >
                {link}
              </a>
            ))}
            <button type="button" className="px-5 py-2 rounded-md font-medium border border-indigo-600 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700">
              Connect Wallet
            </button>
          </div>

          {/* Hamburger Menu */}
          <div className="lg:hidden " onClick={toggleNav}>
            {nav ? (
              <IoClose size={30} className="text-white" />
            ) : (
              <AiOutlineMenu size={25} className="text-white" />
            )}
          </div>

          {/* Mobile Menu */}

          {nav && (
            <div className="absolute top-14 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 z-50 w-full px-24 py-8 rounded-lg lg:hidden">
              <div className="flex flex-col items-center space-y-6 text-sm">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href=""
                    className="hover:text-indigo-600 duration-200 ease-in-out"
                  >
                    {link}
                  </a>
                ))}
                <button className="px-5 py-2 rounded-md font-medium border border-indigo-600 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700">
                  Connect Wallet
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
