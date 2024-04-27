import Image from "next/image";
import React from "react";
import ProjectItem from "../ProjectItem";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { ProjectsType } from "@/lib/type";
const fetchingData = async () => {
  const res = await client.fetch(
    `*[_type=="projects"]{image,name}`,
    {},
    { cache: "no-cache" }
  );
  return res;
};

export default async function Projects() {
  const data: ProjectsType[] = await fetchingData();

  return (
    <div className="bg-[#02050a] pt-[4rem]  md:pt-[8rem] pb-[7rem]  ">
      <h1 className="heading">
        pro <span className="text-yellow-400">jects</span>{" "}
      </h1>
      <div className="w-[80%] pt-[0.5rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] ">
        {data.map((item: any) => {
          return <ProjectItem image={urlForImage(item.image)} />;
        })}
      </div>
    </div>
  );
}
