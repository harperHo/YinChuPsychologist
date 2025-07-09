import React from "react";
import Image from "next/image";

import { basePath } from "../../next.config";

const Contact: React.FC = () => {
  return (
    <div className="px-10 pt-10 pb-12 flex flex-col items-center bg-[#96988B] md:pt-14 md:pb-16 md:flex-row md:justify-center">
      <div className="flex flex-col items-center text-white md:mr-10 md:items-start">
        <p className="text-sm">電子信箱</p>
        <p className="mb-8 text-xl font-light">
          <a href="mailto:yc.liu05@gmail.com">yc.liu05@gmail.com</a>
        </p>
        <p className="text-sm">LINE 官方帳號</p>
        <p className="text-xl font-light">
          <a
            href="https://lin.ee/xyLekku"
            target="_blank"
            rel="noopener noreferrer"
          >
            @yc.liu
          </a>
        </p>
      </div>
      <div className="mt-6 md:mt-0 md:ml-10">
        <a
          href="https://lin.ee/xyLekku"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-[100px] h-[100px] md:w-[200px] md:h-[200px]">
            <Image src={`${basePath}/line.png`} fill alt="line" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
