import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="cursive font-bold text-[20px] pb-2">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <a href="https://www.youtube.com/@ahmedhamdy4336"></a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <a href="https://github.com/ahmedhamdy272"></a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <a href="https://discord.com/"></a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="cursive font-bold text-[16px] pb-2">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <a href="https://www.instagram.com/ah_med.ham_dy?igsh=MWE4cnZ4NzQwbnk2MQ=="></a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxTwitterLogo />
              <a href="https://x.com/AhmedHa87740668?t=aCCFApMn8hnHGt7cR1gc-g&s=09"></a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <a href="www.linkedin.com/in/dev-ahmed-hamdi"></a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="cursive font-bold text-[20px] pb-2">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                ahmedhamdyabdlaty@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mt-[40px] text-[16px] text-center">
          &copy; KoKa Dev 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
