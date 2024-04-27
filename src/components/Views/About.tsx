import Button from "../Button";
import Image from "next/image";
import { PhoneArrowDownLeftIcon } from "@heroicons/react/16/solid";
import { client } from "../../../sanity/lib/client";
import { AboutType } from "@/lib/type";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

const fetchingData = async () => {
  const res = await client.fetch(
    `*[_type=="about"]{image,phoneNumber,introduction}`,
    {},
    { cache: "no-cache" }
  );
  return res;
};

export default async function About() {
  const data: AboutType[] = await fetchingData();

  return (
    <>
      <Link href={"http://localhost:3000/about"}>
        <div className="bg-[#121121] pb-[5rem] pt-[3rem] md:pt-[6rem] ">
          <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center justify-center">
            {data.map((item, index) => {
              return (
                <>
                  <div key={index} className="">
                    <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
                      ABOUT ME
                    </h1>
                    <h2 className="text-[25px] md:text-[35px]  md:leading-[3rem] leading-[2rem] capitalize mb-[1rem] font-bold text-white">
                      Transforming{" "}
                      <span className="text-yellow-400">visions</span>
                    </h2>
                    <div className="mb-[10px] flex items-center md:space-x-10">
                      <p className="text-[19px] text-slate-300 w-[80%]">
                        {item.introduction}
                      </p>
                    </div>
                    <div className="flex flex-col lg:flex-row md:gap-5 ">
                      <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                        <Button />
                      </div>
                      <div className=" mt-[2rem] lg:w-[40%] md:w-[70%] w-[60%] cursor-pointer px-[1rem] sm:w-[42%] hover:bg-yellow-400 transition-all duration-200 py-[1rem] md:text-[16px] text-[10px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-4    ">
                        <PhoneArrowDownLeftIcon className="w-[1.6rem] h-[1.7rem] text-black" />
                        <p className="sm:text-[15px]">{item.phoneNumber}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] sm:w-[300px] sm:h-[300px] w-[200px] h-[200px] relative">
                    <Image
                      src={urlForImage(item.image)}
                      width={1000}
                      height={1000}
                      alt="user"
                      objectFit="contain"
                      className="relative z-[11] "
                    />

                    <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] sm:top-[-2rem] sm:right-[-2rem] top-[-1rem] right-[-1rem]"></div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Link>
    </>
  );
}
