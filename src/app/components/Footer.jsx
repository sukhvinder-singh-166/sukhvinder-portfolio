import Link from "next/link";
import React from "react";
import { EMAIL, PHONENO } from "../constant";
import { IconEmail, PhoneIcon } from "./common/Icons";
import { SOCIAL_MEDIA } from "./common/Helper";

const Footer = () => {
  return (
    <div className=" bg-[#111827] py-10" id="contact">
      <div className="max-w-[1280px] mx-auto px-4 w-full">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-white text-base bg-[#374151] font-bold mb-5 px-3 py-1 mx-auto rounded-xl">
            Skills
          </h2>
        </div>
        <p className=" text-[20px] text-center text-white mb-10 max-w-[576px] mx-auto">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>

        <div className="flex flex-col items-center justify-center">
          <Link
            href={EMAIL}
            className="mx-auto flex items-center gap-x-2 font-bold lg:text-[36px] sm:text-[24px] text-xl text-center text-white"
          >
            <IconEmail /> monudhaka829@gmail.com
          </Link>
          <Link
            href={PHONENO}
            className="mx-auto flex items-center gap-x-2 font-bold lg:text-[36px] sm:text-[24px] text-xl text-center text-white mt-5"
          >
            <PhoneIcon /> +91 9306922645
          </Link>
        </div>
        <p className=" text-[20px] text-center text-white mt-10 max-w-[576px] mx-auto">
          You may also find me on these platforms!
        </p>
        <ul className=" flex items-center gap-3 mt-3 justify-center">
          {SOCIAL_MEDIA.map((item) => (
            <li>
              <Link className="group" href={item.url}>
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=" h-[1px] bg-white w-full mt-7"></div>
      <p className=" text-center text-white mt-5">
        © {new Date().getFullYear()} Sukhvinder Singh. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
