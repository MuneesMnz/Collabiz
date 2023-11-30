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
    <div className={`fixed top-0 w-full h-[70px]  ${scolldown >250 ? "bg-[#050505]/50 backdrop-blur-md  " :"bg-none"}  text-white flex justify-between items-center px-16`}>
      <img src={Logo} className="w-[150px]" />
      <div className="flex items-center gap-7">
        <NavLink className="cursor-pointer opacity-80 hover:opacity-100">
          Home
        </NavLink>
        <NavLink
          className="cursor-pointer opacity-80 hover:opacity-100"
          opacity-80
          hover:opacity-100
        >
          About
        </NavLink>
        <NavLink className="cursor-pointer opacity-80 hover:opacity-100">
          Services
        </NavLink>
        <NavLink className="cursor-pointer opacity-80 hover:opacity-100">
          Contact
        </NavLink>
      </div>
      <button className="text-white bg-secondary px-8 py-2 rounded-md text-lg">
        Login
      </button>
    </div>
  );
};

export default Navbar;
