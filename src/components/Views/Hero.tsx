"use client";
import Image from "next/image";
import { PhoneArrowDownLeftIcon } from "@heroicons/react/20/solid";
import Button from "../Button";
import TextEffectHelper from "../TextEffectHelper";
import ParticleReactItem from "../ParticleReactItem";

export default function Hero() {
  return (
    <div className="h-[90vh] pb-[700px] sm:pb-0 md:pb-[760px] lg:pb-[20px] ">
      <ParticleReactItem />
      <div className="w-[80%]  grid-cols-1 mx-auto grid md:grid-cols-2 gap-[3rem] h-[100%] items-center ">
        <div className="z-[100]">
          <h1 className="text-[35px] md:text-[40px] uppercase  text-white font-bold">
            Hi I&apos;M <span className="text-yellow-400">Nasir Abbas</span>
          </h1>
          {/* tsr */}
          <TextEffectHelper />

          <p className="text-[#ffffff92] text-[20px] pt-[2rem]">
            Hey nasir there, I&apos;m Nasir Abbas – your Next.js web development
            aficionado! 🚀 Passionate about pushing the boundaries of web
            technology, I specialize in crafting dynamic, high-performance
            websites and applications using Next.js.
          </p>
          <div className="flex flex-col lg:flex-row md:gap-5 ">
            <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
              <Button />
            </div>
            <div className=" mt-[2rem] lg:w-[40%] md:w-[70%] w-[60%] cursor-pointer px-[1rem] sm:w-[42%] hover:bg-yellow-400 transition-all duration-200 py-[1rem] md:text-[16px] text-[10px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-4    ">
              <PhoneArrowDownLeftIcon className="w-[1.6rem] h-[1.7rem] text-black" />
              <p className="sm:text-[15px]">02351080555</p>
            </div>
          </div>
        </div>
        <div className="w-[500px] h-[500px] hidden bg-[#55e6a5] relative md:flex items-center rounded-full">
          <Image
            src={"/images/nasir.png"}
            layout="fill"
            alt="user"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
