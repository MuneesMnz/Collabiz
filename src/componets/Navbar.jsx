import React, { useEffect, useState } from "react";
import Logo from "../assets/images/collabiz.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scolldown, setScrollDown] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollDown(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 w-full h-[70px] z-[999]  ${
        scolldown > 250 ? "bg-[#050505]/50 backdrop-blur-md  " : "bg-none"
      }  text-white flex justify-between items-center px-16 max-lg:px-3`}
    >
      <img src={Logo} className="w-[150px]" />
      <div className="flex items-center gap-7 max-lg:hidden">
        <NavLink className="cursor-pointer opacity-80  duration-200  hover:opacity-100 hover:text-lg">
          Home
        </NavLink>
        <NavLink className="cursor-pointer opacity-80 duration-200 hover:opacity-100 hover:text-lg">
          About
        </NavLink>
        <NavLink className="cursor-pointer opacity-80  duration-200  hover:opacity-100 hover:text-lg">
          Services
        </NavLink>
        <NavLink className="cursor-pointer opacity-80  duration-200  hover:opacity-100 hover:text-lg">
          Contact
        </NavLink>
      </div>
      <button className="text-secondary border border-secondary px-8 py-2 rounded-full duration-300 hover:bg-secondary hover:text-white text-lg">
        Login
      </button>
    </div>
  );
};

export default Navbar;
