import React from "react";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { AboutType } from "@/lib/type";
const fetchingData = async () => {
  const res = await client.fetch(
    `*[_type=="skills"]{skill,level}`,
    {},
    { cache: "no-cache" }
  );
  return res;
};
export default async function Checking() {
  const data: AboutType[] = await fetchingData();
  console.log("nasir res", data);
  return (
    <div className="bg-white">
      <h1>checking here</h1>

      {data.map((item: any) => {
        return <>{item.skill}</>;
      })}
      {data.map((item: any) => {
        return <>{item.level}</>;
      })}
      {/* {data.map((item: any) => {
        return <>{item.description}</>;
      })} */}
      {/* {data.map((item: any) => {
        return (
          <Image
            src={urlForImage(item.image)}
            width={1000}
            height={1000}
            alt="user"
          />
        );
      })} */}
    </div>
  );
}
