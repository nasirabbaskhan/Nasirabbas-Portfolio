import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function Button() {
  return (
    <div className="lg:w-[100%] md:w-[60%] w-[60%] cursor-pointer px-[1rem] sm:w-[42%] hover:bg-yellow-400 transition-all duration-200 py-[1rem] md:text-[16px] text-[10px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
      <p className="sm:text-[15px]">DownLoad CV </p>
      <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
    </div>
  );
}
