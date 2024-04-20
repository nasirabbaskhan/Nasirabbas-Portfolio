import Image from "next/image";
interface Props {
  image: string;
}

export default function ProjectItem({ image }: Props) {
  return (
    <div>
      <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[00px] md:h-[200px] border-blue-600 border-[10px] ">
        <Image
          src={image}
          layout="fill"
          alt="user"
          className="object-contain"
        />
      </div>
    </div>
  );
}
