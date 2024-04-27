import React from "react";

import Testamon from "../Testmon";
import { client } from "../../../sanity/lib/client";
import { TestimonialType } from "@/lib/type";
const fetchingData = async () => {
  const res = await client.fetch(
    `*[_type=="testimonial"]{commentator,comment, role,image}`,
    {},
    { cache: "no-cache" }
  );
  return res;
};
export default async function Testimonial() {
  const data: TestimonialType[] = await fetchingData();
  return (
    <div className="bg-[#121121] pt-[4rem] md:pt-[8rem] pb-[1rem]  ">
      <h1 className="heading">
        Testimo <span className="text-yellow-400">nials</span>
      </h1>
      <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto  ">
        <section className="text-white body-font ">
          <div className="container px-1 py-2 mx-auto">
            <div className="grid grid-cols-2 gap-5">
              {data.map((item, index) => {
                return (
                  <span key={index}>
                    <Testamon
                      commentator={item.commentator}
                      role={item.role}
                      comment={item.comment}
                      image={item.image}
                    />
                  </span>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
