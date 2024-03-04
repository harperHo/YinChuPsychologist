import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 flex items-center justify-center flex-col">
        <div className="mb-7 flex flex-col text-center md:text-left">
          <span className="hidden ml-1 md:inline">諮心字第 004430 號</span>
          <h2 className="tracking-wider text-2xl mb-2 md:text-4xl md:mb-4">
            諮商心理師
          </h2>
          <h1 className="tracking-wider text-6xl md:text-8xl md:ml-4">
            劉映竺
          </h1>
          <span className="text-xs mt-3 md:hidden">諮心字第 004430 號</span>
        </div>
        <div className="hidden flex-col justify-center md:flex">
          <span>長期深度自我探索 / 原生家庭議題 / 人際關係議題</span>
          <span>多元性別與自我認同 / 情感性精神疾患 / 心理動力取向諮商</span>
        </div>
      </div>
      <div className="flex-1 flex">
        <div className="pt-10 mx-5 w-[450px] flex justify-center bg-primary-2 rounded-[120px] rounded-br-none overflow-hidden md:mx-9">
          <div className="relative w-[200px] h-[374px] md:w-[250px] md:h-[468px]">
            <Image src="/profilePic.png" fill alt="Picture of the author" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
