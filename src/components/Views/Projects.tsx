import Image from "next/image";
import React from "react";
import ProjectItem from "../ProjectItem";

export default function Projects() {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[0.5rem]  ">
      <h1 className="heading">
        pro <span className="text-yellow-400">jects</span>{" "}
      </h1>
      <div className="w-[80%] pt-[0.5rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] ">
        <ProjectItem image="/images/imgt.jpeg" />
        <ProjectItem image="/images/food.jpeg" />
        <ProjectItem image="/images/project2.jpeg" />
        <ProjectItem image="/images/imgt.jpeg" />
        <ProjectItem image="/images/food.jpeg" />
        <ProjectItem image="/images/project2.jpeg" />
      </div>
    </div>
  );
}
