import React from "react";
import TestimonialSlider from "../TestimonialSlider";
import Testamon from "../Testmon";

export default function Testimonial() {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]  ">
      <h1 className="heading">
        Testimo <span className="text-yellow-400">nials</span>
      </h1>
      <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto  ">
        {/* testimonial slider */}
        {/* <TestimonialSlider /> */}
        <Testamon />
      </div>
    </div>
  );
}
