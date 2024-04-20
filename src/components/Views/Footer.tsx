import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import React from "react";

export default function Footer() {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#141c27]">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-[3rem] ">
        <div className="flex items-center space-x-4">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <MapIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div className="">
            <p className="text-[17px] w-[90%] text-white opacity-60">
              Ahmad Pur Sial Punjab Pakistan
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div className="">
            <p className="text-[17px] w-[90%] text-white opacity-60">
              +920251080019 <br /> +923036702180
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div className="">
            <p className="text-[17px] w-[90%] text-white opacity-60">
              akhtarabbas.islamicreaction <br /> @gmail.com
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-[80%] mt-[2rem] mx-auto grid
       grid-cols-1 md:grid-cols-2 items-center justify-between "
      >
        <div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-20 ">
          WebDev warriors 2024 | All Rights Reserved
        </div>
        <div className="flex items-center space-x-10 ">
          <p className="text-[16px] text-white opacity-20 ">
            Terms $ Conditions
          </p>
          <p className="text-[16px] text-white opacity-20 ">Privacy Policy</p>
          <p className="text-[16px] text-white opacity-20 ">Sitemap</p>
        </div>
      </div>
    </div>
  );
}
