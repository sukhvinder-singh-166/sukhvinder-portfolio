import React from "react";

const Experience = () => {
  const EXPERIENCE = [
    {
      company: "Fiverr",
      position: "Sr. Frontend Developer",
      duration: "Nov 2021 - Present",
      description: [
        "Developed and maintained the frontend of a web application",
        "Developed and maintained the frontend of a web application",
      ],
    },
    {
      company: "UPWORK",
      position: "Team Lead",
      duration: "Jul 2017 - Oct 2021",
      description: [
        "Developed and maintained the frontend of a web application",
        "Developed and maintained the frontend of a web application",
      ],
    },
  ];
  return (
    <div className=" bg-[#111827] lg:py-[96px] py-10">
      <div className="max-w-[1280px] mx-auto px-4 w-full">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-white text-base bg-[#374151] font-bold mb-5 px-3 py-1 mx-auto rounded-xl">
            Experience
          </h2>
        </div>
        <p className=" text-[20px] text-center text-white mb-10">
          Here is a quick summary of my most recent experiences:
        </p>
        <div className=" flex flex-col gap-y-10">
          {EXPERIENCE.map((obj, index) => {
            return (
              <div
                className="p-[32px] w-full max-w-[896px] bg-[#1F2937] mx-auto rounded-lg"
                key={index}
              >
                <div className="flex lg:flex-row flex-col gap-4 justify-between">
                  <h3 className="text-[#14A800] text-2xl font-bold">
                    {obj.company}
                  </h3>
                  <p className="text-white lg:hidden">{obj.duration}</p>
                  <div className="">
                    <p className="text-white font-bold mb-4 text-xl">
                      {obj.position}
                    </p>
                    <ul className="list-disc ps-5">
                      {obj.description.map((item, index) => {
                        return (
                          <li className="text-white mb-2 max-w-[350px]">
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <p className="text-white lg:block hidden">{obj.duration}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
