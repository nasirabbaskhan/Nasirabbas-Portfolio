"use client";
import Image from "next/image";
import MobileNavbar from "../MobileNavbar";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";

export default function Header() {
  const [isNavbar, setIsNavbar] = useState<boolean>(false);
  const openNavbar = () => {
    setIsNavbar(true);
  };
  const closeNavbar = () => {
    setIsNavbar(false);
  };
  return (
    <>
      <div className="bg-[#141c27] flex sticky top-0 z-[1000] content-center justify-between py-5 px-6 shadow-md ">
        <div className="left">
          <h1 className="flex-[0.6] text-[20px] cursor-pointer font-bold text-white">
            WEB <span className="text-yellow-400">DEV</span>
          </h1>
        </div>
        <div className="right ">
          <ul className="flex justify-end content-center gap-7">
            <li className="nav-link ">HOME</li>
            <li className="nav-link ">SERVICES</li>
            <li className="nav-link">ABOUT</li>
            <li className="nav-link">PROJECT</li>
            <li className="nav-link">CONTECT</li>
            <li className="nav-link">BLOG</li>
          </ul>
        </div>
        {/* mobile Navbar */}
        <div
          onClick={openNavbar}
          className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-400 "
        >
          <Bars3Icon />
        </div>
      </div>
      {isNavbar && (
        <MobileNavbar closeNavbar={closeNavbar} isNavbar={isNavbar} />
      )}
    </>
  );
}
