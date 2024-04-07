import React, { useMemo } from "react";
import Image from "next/image";

import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { specialities } from "./Specialties";
import { basePath } from "../../next.config";

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
    ? "animate-[fade-in-bt_500ms_ease-in-out] md:animate-[fade-in-lr_800ms_ease-in-out]"
    : "opacity-0";
  const fadeInCls = isIntersecting
    ? "animate-[fade-in-bt_500ms_ease-in-out] md:animate-[fade-in_500ms_ease-in-out]"
    : "opacity-0";
  const fadeInSpecialitiesCls = isIntersecting
    ? "animate-[fade-in-bt_800ms_ease-in-out]"
    : "opacity-0";
  const fadeInPictureCls = isIntersecting
    ? "animate-[fade-in-bt_500ms_ease-in-out] md:animate-[fade-in-rl_500ms_ease-in-out]"
    : "opacity-0";

  return (
    <div
      ref={ref}
      className="pt-[130px] pb-10 flex flex-col md:pt-[160px] md:pb-20 md:flex-row"
    >
      <div className="flex-1 flex items-center justify-center flex-col md:px-5">
        <div className="mb-7 flex flex-col text-center md:text-left">
          <h2
            className={`tracking-wider text-2xl mb-2 order-1 ${fadeInSlowCls} md:text-3xl md:mb-4 md:order-2 lg:text-4xl`}
          >
            諮商心理師
          </h2>
          <h1
            className={`tracking-wider text-6xl order-2 ${fadeInCls} md:text-7xl md:ml-4 md:order-3 lg:text-8xl`}
          >
            劉映竺
          </h1>
          <div
            className={`text-xs mt-3 order-3 ${fadeInSlowCls} md:ml-1 md:text-base md:order-1`}
          >
            諮心字第 004430 號
          </div>
          <div
            className={`hidden flex-col justify-center mt-6 order-4 ${fadeInSpecialitiesCls} md:flex`}
          >
            {specialityByGroups.map((specialities, i) => (
              <span key={i}>{specialities.join(" / ")}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-start">
        <div
          className={`pt-10 mx-5 w-[100%] max-w-[450px] flex justify-center bg-grey rounded-[120px] rounded-br-none overflow-hidden ${fadeInPictureCls} md:mr-5 md:ml-0`}
        >
          <div className="relative w-[55%]">
            <Image
              className="w-full h-auto"
              src={`${basePath}/profilePic.png`}
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
