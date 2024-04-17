import Image from "next/image";
import React from "react";
import BlogItem from "../BlogItem";

export default function Blog() {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">
        My <span className="text-yellow-400">Blog</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[85%] mx-auto">
        <BlogItem
          date="December 10, 2023"
          comments={2}
          commentator="Sajal"
          topic="Nextjs FullStack Development"
          image="/images/an.jpg"
        />
        <BlogItem
          date="December 15, 2023"
          comments={8}
          commentator="Talukder"
          topic="React New Fetures"
          image="/images/an.jpg"
        />
        <BlogItem
          date="December 20, 2023"
          comments={9}
          commentator="Anasl"
          topic="NextJs New Fetures"
          image="/images/an.jpg"
        />
      </div>
    </div>
  );
}
