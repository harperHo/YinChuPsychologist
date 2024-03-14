import React, { useMemo } from "react";
import Image from "next/image";

import { specialities } from "./Specialties";

const GROUP_SIZE = 3;

const About: React.FC = () => {
  const specialityByGroups = useMemo(() => {
    const _specialityByGroups = [];
    let i = 0;

    while (i < GROUP_SIZE) {
      const start = i * GROUP_SIZE;
      const end = start + GROUP_SIZE;

      _specialityByGroups.push(
        specialities.slice(start, end).map((speciality) => speciality.title)
      );
      i++;
    }

    return _specialityByGroups;
  }, []);

  return (
    <div className="pb-20 mt-[130px] flex flex-col md:mt-[160px] md:flex-row">
      <div className="flex-1 flex items-center justify-center flex-col">
        <div className="mb-7 flex flex-col text-center md:text-left">
          <h2 className="tracking-wider text-2xl mb-2 order-1 md:text-4xl md:mb-4 md:order-2">
            諮商心理師
          </h2>
          <h1 className="tracking-wider text-6xl order-2 md:text-8xl md:ml-4 md:order-3">
            劉映竺
          </h1>
          <div className="text-xs mt-3 order-3 md:ml-1 md:text-base md:order-1">
            諮心字第 004430 號
          </div>
          <div className="hidden flex-col justify-center mt-6 order-4 md:flex">
            {specialityByGroups.map((specialities, i) => (
              <span key={i}>{specialities.join(" / ")}</span>
            ))}
          </div>
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
