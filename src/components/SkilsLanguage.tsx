interface Props {
  skill: string;

  level: string;
}

export default function SkilsLanguage({ skill, level }: Props) {
  return (
    <div>
      <div className="relative mb-[3rem] ">
        <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold ">
          {skill}
        </h1>
        <span
          className={`${level} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
        ></span>
      </div>
    </div>
  );
}
