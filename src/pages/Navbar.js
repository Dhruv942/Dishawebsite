import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assest/Disha.png";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "EVENTS", link: "/ev" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div
      className={`shadow-md  w-full  top-0 left-0 ${open ? "bg-black" : ""}`}
    >
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img src={Logo} className="h-12 w-36 md:h-auto ml-8" alt="Logo" />
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static rounded-xl h-3/4 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-bold mr-5">
              <a
                href={link.link}
                className="text-gray-800 hover:text-green-400 duration-500 "
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="btn bg-green-600  text-white md:ml-8  font-bold px-3 py-1 rounded duration-500 md:static">
            Donate us
          </button>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Navbar;
