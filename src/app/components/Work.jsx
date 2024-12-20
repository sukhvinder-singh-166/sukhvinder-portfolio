import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LinkIcon } from "./common/Icons";
import { PROJECTSDETAIL } from "./common/Helper";

const Work = () => {
  
  return (
    <div className="bg-[#030712] lg:py-[96px] py-10" id="projects">
      <div className="max-w-[1280px] mx-auto px-4 w-full">
        <div className="flex flex-col items-center">
          <h2 className="text-white text-base bg-[#374151] font-bold mb-10 px-3 py-1 mx-auto rounded-xl">
            Work
          </h2>{" "}
          <p className="text-white lg:text-[16px] text-[14px] mb-10">
            Some of the noteworthy projects I have built:
          </p>
        </div>{" "}
        <div className=" w-full flex flex-col gap-y-10">
          {PROJECTSDETAIL.map((obj, index) => {
            return (
              <div className="w-full" key={index}>
                <div className="max-w-[1150px] md:hidden w-full flex flex-wrap rounded-xl">
                  <div className="md:w-6/12 w-full bg-[#374151] md:p-11 p-5 md:rounded-tl-xl md:rounded-bl-xl rounded-t-xl md:rounded-tr-none">
                    <Image
                      src={obj.image}
                      alt="Clear talk"
                      width={500}
                      height={500}
                      className=" rounded-2xl w-full min-h-[300px] object-center object-cover"
                    />
                  </div>
                  <div className="md:w-6/12 w-full bg-[#1F2937] md:p-11 p-5 md:rounded-tr-xl md:rounded-br-xl rounded-b-xl md:rounded-bl-none">
                    <p className="text-white text-xl mb-3">{obj.title}</p>
                    <p className="text-white text-base mb-3 opacity-60">
                      {obj.description}
                    </p>
                    <div className=" flex flex-wrap gap-3 justify-start mb-5">
                      {obj.library.map((lib, index) => {
                        return (
                          <button
                            key={index}
                            className="text-white text-base bg-[#374151] px-3 py-1 rounded-xl"
                          >
                            {lib}
                          </button>
                        );
                      })}
                    </div>
                    <Link
                      href={obj.link}
                      target="_blank"
                      className="max-w-6 max-h-6"
                    >
                      <LinkIcon />
                    </Link>
                  </div>
                </div>
                <div className=" md:block hidden">
                  {index % 2 === 0 ? (
                    <>
                      <div className="max-w-[1150px] w-full flex flex-wrap rounded-xl">
                        <div className="md:w-6/12 w-full bg-[#374151] md:p-11 p-5 md:rounded-tl-xl md:rounded-bl-xl rounded-t-xl md:rounded-tr-none">
                          <Image
                            src={obj.image}
                            alt="Clear talk"
                            width={500}
                            height={500}
                            className=" rounded-2xl w-full min-h-[300px] object-center object-cover"
                          />
                        </div>
                        <div className="md:w-6/12 w-full bg-[#1F2937] md:p-11 p-5 md:rounded-tr-xl md:rounded-br-xl rounded-b-xl md:rounded-bl-none">
                          <p className="text-white text-xl mb-3">{obj.title}</p>
                          <p className="text-white text-base mb-3 opacity-60">
                            {obj.description}
                          </p>
                          <div className=" flex flex-wrap gap-3 justify-start mb-5">
                            {obj.library.map((lib, index) => {
                              return (
                                <button
                                  key={index}
                                  className="text-white text-base bg-[#374151] px-3 py-1 rounded-xl"
                                >
                                  {lib}
                                </button>
                              );
                            })}
                          </div>
                          <Link
                            href={obj.link}
                            target="_blank"
                            className="max-w-6 max-h-6"
                          >
                            <LinkIcon />
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="max-w-[1150px] w-full md:flex hidden flex-wrap rounded-xl">
                      <div className="md:w-6/12 w-full bg-[#1F2937] md:p-11 p-5 md:rounded-tl-xl md:rounded-bl-xl rounded-t-xl md:rounded-tr-none">
                        <p className="text-white text-xl mb-3">{obj.title}</p>
                        <p className="text-white text-base mb-3 opacity-60">
                          {obj.description}
                        </p>
                        <div className=" flex flex-wrap gap-3 justify-start mb-5">
                          {obj.library.map((lib, index) => {
                            return (
                              <button
                                key={index}
                                className="text-white text-base bg-[#374151] px-3 py-1 rounded-xl"
                              >
                                {lib}
                              </button>
                            );
                          })}
                        </div>
                        <Link
                          href={obj.link}
                          target="_blank"
                          className="max-w-6 max-h-6"
                        >
                          <LinkIcon />
                        </Link>
                      </div>{" "}
                      <div className="md:w-6/12 w-full bg-[#374151] md:p-11 p-5 md:rounded-tr-xl md:rounded-br-xl rounded-b-xl md:rounded-bl-none">
                        <Image
                          src={obj.image}
                          alt="Clear talk"
                          width={500}
                          height={500}
                          className=" rounded-2xl w-full min-h-[300px] object-center object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
