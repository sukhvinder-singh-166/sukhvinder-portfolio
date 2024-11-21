import React from "react";
import { SKILLS } from "./common/Helper";

const Skill = () => {
  return (
    <div className=" bg-[#030712] lg:py-[96px] py-10">
      <div className="max-w-[1280px] mx-auto px-4 w-full">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-white text-base bg-[#374151] font-bold mb-5 px-3 py-1 mx-auto rounded-xl">
            Skills
          </h2>
        </div>
        <p className=" text-[20px] text-center text-white mb-10">
          The skills, tools and technologies I am really good at:
        </p>
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-10">
          {SKILLS.map((obj, index) => {
            return (
              <div
                className="flex items-center justify-center flex-col"
                key={index}
              >
                <span className="max-w-[48px] max-h-[48px] w-full h-full mb-2">
                  {obj.icon}
                </span>
                <p className=" text-white text-lg text-center">{obj.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
