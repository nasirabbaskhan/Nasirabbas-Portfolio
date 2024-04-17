import React from "react";
import Button from "../Button";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[#121121] pb-[5rem] pt-[3rem] md:pt-[6rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center justify-center">
        <div className="">
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px]  md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transforming <span className="text-yellow-400">visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] h-[5px] hidden md:block bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam id
              animi ab! Similique quasi assumenda voluptas, amet non recusandae
              culpa natus ut?
            </p>
          </div>
          <Button />
        </div>
        <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] sm:w-[300px] sm:h-[300px] w-[200px] h-[200px] relative">
          <Image
            src={"/images/about.png"}
            alt="user"
            width={1000}
            height={1000}
            objectFit="contain"
            className="relative z-[11] "
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] sm:top-[-2rem] sm:right-[-2rem] top-[-1rem] right-[-1rem]"></div>
        </div>
      </div>
    </div>
  );
}
