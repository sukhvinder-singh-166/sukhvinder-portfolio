import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-[#111827] lg:py-[96px] py-10">
      <div className="max-w-[1280px] mx-auto px-4 w-full">
        <div className="flex flex-col items-center">
          <h2 className="text-white text-base bg-[#374151] font-bold mb-10 px-3 py-1 mx-auto rounded-xl">
            About Me
          </h2>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:mx-0 mx-auto flex justify-center">
            <div className="flex justify-center lg:w-[400px] lg:max-h-[480px] w-[300px] lg:max-w-[400px] max-h-[320px] relative">
              <Image
                src="/assets/images/png/profile.jpg"
                alt="sukhvinder singh"
                className="w-full h-full object-cover lg:max-w-[400px] lg:max-h-[480px] max-w-[300px] max-h-[320px] relative z-10 "
                width={400}
                height={480}
              />
              <div className="lg:max-w-[400px] max-w-[300px] sm:flex hidden lg:max-h-[480px] max-h-[320px] w-full h-full absolute top-[30px] left-[30px] blur-[10px] bg-[#374151]"></div>
            </div>
          </div>
          <div className="md:w-6/12 w-full md:mt-0 mt-10 md:text-start text-center flex flex-col lg:items-start items-center">
            <h2 className="text-white text-base bg-[#374151] font-bold px-3 py-1 mb-4 rounded-xl">
              About Me
            </h2>
            <p className="text-white lg:text-[30px] sm:text-[25px] text-[20px] md:mb-3 mb-2">
              Curious about me? Here you have it:
            </p>
            <p className="text-white lg:text-[16px] text-[14px]">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
