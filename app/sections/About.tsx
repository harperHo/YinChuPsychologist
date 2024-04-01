import React, { useMemo } from "react";
import Image from "next/image";

import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { specialities } from "./Specialties";

const GROUP_SIZE = 3;

const About: React.FC = () => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0,
  });

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

  const fadeInSlowCls = isIntersecting
    ? "opacity-1 animate-[fade-in-lr_800ms_ease-in-out]"
    : "opacity-0";
  const fadeInCls = isIntersecting
    ? "opacity-1 animate-[fade-in_500ms_ease-in-out]"
    : "opacity-0";
  const fadeInSpecialitiesCls = isIntersecting
    ? "opacity-1 animate-[fade-in-bt_800ms_ease-in-out]"
    : "opacity-0";
  const fadeInPictureCls = isIntersecting
    ? "opacity-1 animate-[fade-in-rl_500ms_ease-in-out]"
    : "opacity-0";

  return (
    <div
      ref={ref}
      className="pt-[130px] pb-20 flex flex-col md:pt-[160px] md:flex-row"
    >
      <div className="flex-1 flex items-center justify-center flex-col">
        <div className="mb-7 flex flex-col text-center md:text-left">
          <h2
            className={`tracking-wider text-2xl mb-2 order-1 md:text-4xl md:mb-4 md:order-2 ${fadeInSlowCls}`}
          >
            諮商心理師
          </h2>
          <h1
            className={`tracking-wider text-6xl order-2 md:text-8xl md:ml-4 md:order-3 ${fadeInCls}`}
          >
            劉映竺
          </h1>
          <div
            className={`text-xs mt-3 order-3 md:ml-1 md:text-base md:order-1 ${fadeInSlowCls}`}
          >
            諮心字第 004430 號
          </div>
          <div
            className={`hidden flex-col justify-center mt-6 order-4 md:flex ${fadeInSpecialitiesCls}`}
          >
            {specialityByGroups.map((specialities, i) => (
              <span key={i}>{specialities.join(" / ")}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 flex">
        <div
          className={`pt-10 mx-5 w-[450px] flex justify-center bg-grey rounded-[120px] rounded-br-none overflow-hidden md:mx-9 ${fadeInPictureCls}`}
        >
          <div className="relative w-[200px] h-[374px] md:w-[250px] md:h-[468px]">
            <Image
              className="w-full h-auto"
              src="/profilePic.png"
              alt="Picture of the author"
              priority={true}
              width={250}
              height={468}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
