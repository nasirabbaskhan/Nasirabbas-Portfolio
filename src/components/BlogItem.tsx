import Image from "next/image";
interface Props {
  date: string;
  comments: number;
  commentator: string;
  topic: string;
  image: string;
}
export default function BlogItem({
  date,
  comments,
  commentator,
  topic,
  image,
}: Props) {
  return (
    <div>
      <div className="w-[100%] relative h-[400px] ">
        <Image src={image} layout="fill" alt="user" className="object-cover" />
      </div>
      <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]   ">
        <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem ] text-black font-semibold text-[14px] mx-auto ">
          {date}
        </div>
        <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4 ">
          <div className="flex items-center space-x-3 ">
            {/* <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[55e6a5]"/> */}
            <p className="text-white">By {commentator}</p>
          </div>
          <div className="flex items-center space-x-3 ">
            {/* <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[55e6a5]"/> */}
            <p className="text-white">Comments({comments})</p>
          </div>
        </div>
        <p className="mt-[1rem] text-white text-[18px]  ">{topic}</p>
      </div>
    </div>
  );
}
