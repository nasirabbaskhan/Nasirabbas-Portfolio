import Image from "next/image";
import React from "react";

export default function Projects() {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[0.5rem]  ">
      <h1 className="heading">
        pro <span className="text-yellow-400">jects</span>{" "}
      </h1>
      <div className="w-[80%] pt-[0.5rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] ">
        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
            <Image
              src={"/images/pro.webp"}
              layout="fill"
              alt="user"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
            <Image
              src={"/images/pro.webp"}
              layout="fill"
              alt="user"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
            <Image
              src={"/images/pro.webp"}
              layout="fill"
              alt="user"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
            <Image
              src={"/images/pro.webp"}
              layout="fill"
              alt="user"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
            <Image
              src={"/images/pro.webp"}
              layout="fill"
              alt="user"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] ">
            <Image
              src={"/images/pro.webp"}
              layout="fill"
              alt="user"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
