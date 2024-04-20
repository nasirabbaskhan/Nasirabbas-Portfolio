import { EducationType, SkillsType } from "@/lib/type";
import { client } from "../../../sanity/lib/client";
import SkillsItem from "../SkillsItem";
import SkilsLanguage from "../SkilsLanguage";
const fetchingEducationData = async () => {
  const res = await client.fetch(
    `*[_type=="education"]{year,title,description}`,
    {},
    { cache: "no-cache" }
  );
  return res;
};

const fetchingData = async () => {
  const res = await client.fetch(
    `*[_type=="skills"]{skill,level}`,
    {},
    { cache: "no-cache" }
  );
  return res;
};

export default async function Skills() {
  const data: EducationType[] = await fetchingEducationData();
  const result: SkillsType[] = await fetchingData();
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400 ">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center ">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <SkillsItem
                title={item.title}
                year={item.year}
                description={item.description}
              />
            </div>
          );
        })}
        {result.map((item) => {
          return (
            <div>
              <SkilsLanguage skill={item.skill} level={`w-[${item.level}]`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
