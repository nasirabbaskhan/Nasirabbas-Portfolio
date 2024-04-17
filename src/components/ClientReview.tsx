import Image from "next/image";
import React from "react";

export default function ClientReview() {
  return (
    <div className="flex flex-col text-center justify-center ">
      <Image
        src={"/images/an.jpg"}
        width={1000}
        height={1000}
        alt="user"
        objectFit="contain"
        className="mx-auto  w-[110px] h-[110px] rounded-full "
      />
      <div className="flex items-center mx-auto">
        {/* <StarIcon className="w-[2rem] h-[2rem] text-yellow-500 "/>
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500 "/>
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500 "/>
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500 "/>
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500 "/> */}
      </div>
      <h1 className="text-[25px] text-white mt-[1rem] ">Aneela Nasir </h1>
      <p className="text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]">
        Web Developer
      </p>
      <p className="text-[20px] text-white opacity-50 w-[90%] md:w-[80%] mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet facere
        modi incidunt debitis nulla odio atque illo eos, nostrum magni alias
        dolore ipsum deleniti quaerat labore vero ut provident nihil!
      </p>
    </div>
  );
}
