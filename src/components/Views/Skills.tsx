import React from "react";
import SkillsItem from "../SkillsItem";
import SkilsLanguage from "../SkilsLanguage";

export default function Skills() {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400 ">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center ">
        <div>
          <SkillsItem title="React Devaloper" year="2014-2018" />
          <SkillsItem title="MERN Stack Devaloper" year="2016-2020" />
          <SkilsLanguage
            skill1="html"
            skill2="CSS"
            skill3="JavaScript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>
        <div>
          <SkillsItem title="Next JS Devaloper" year="2018-2021" />
          <SkillsItem title="Node js Devaloper" year="2021-2023" />
          <SkilsLanguage
            skill1="React Js"
            skill2="Next Js"
            skill3="TypeScript"
            level1="w-[85%]"
            level2="w-[81%]"
            level3="w-[80%]"
          />
        </div>
      </div>
    </div>
  );
}
