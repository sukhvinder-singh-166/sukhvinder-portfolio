import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import { SOCIAL_MEDIA } from "./common/Helper";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#030712] md:min-h-screen flex flex-col">
      <Navbar />
      <div className="grow max-w-[1280px] mx-auto px-4 w-full flex md:py-0 py-10 flex-col justify-center">
        <div className=" flex flex-wrap flex-col-reverse lg:flex-row lg:items-center">
          <div className="w-full lg:w-8/12 lg:mt-0 mt-10 lg:mx-0 mx-auto lg:text-start text-center">
            <h1 className="text-white md:text-[40px] text-[30px] xl:text-[60px] font-bold">
              Hi, I’m Sukhvinder singh 👋
            </h1>
            <p className="text-white md:text-[16px] text-[14px] xl:text-[20px]">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
            <ul className=" flex items-center gap-3 lg:mt-10 mt-5 lg:justify-start justify-center">
              {SOCIAL_MEDIA.map((item) => (
                <li>
                  <Link className="group" href={item.url}>
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-4/12 lg:ps-10 lg:mx-0 mx-auto flex justify-center">
            <div className="flex justify-center w-[280px] max-h-[320px] relative">
              <Image
                src="/assets/images/png/profile.jpg"
                alt="sukhvinder singh"
                className="w-full h-full object-cover max-w-[280px] max-h-[320px] relative z-10 "
                width={280}
                height={320}
              />
              <div className="max-w-[280px] sm:flex hidden max-h-[320px] w-full h-full absolute top-[30px] left-[30px] blur-[10px] bg-[#374151]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
