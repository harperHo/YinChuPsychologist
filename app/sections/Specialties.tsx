import React from "react";

import useIntersectionObserver from "../hooks/useIntersectionObserver";

export const specialities = [
  {
    title: "長期深度自我探索",
    desc: "原生家庭、重大生命事件、創傷、孤獨感",
  },
  {
    title: "精神官能症心理治療",
    desc: "憂鬱、焦慮、恐慌、長期情緒低落、失眠",
  },
  {
    title: "原生家庭議題",
    desc: "關係界線、童年失落、親子／手足關係",
  },
  {
    title: "人際關係議題",
    desc: "失戀、多重關係、社交焦慮、關係破裂",
  },
  {
    title: "女性身份議題",
    desc: "生子疑慮、產後憂鬱／情緒失調、母職焦慮",
  },
  {
    title: "多元性別與自我認同",
    desc: "性向探索與認同、伴侶相處、同志家庭身世告知",
  },
];

const Specialties: React.FC = () => {
  const { hasShown, ref } = useIntersectionObserver({
    threshold: 0.25,
  });

  return (
    <div
      ref={ref}
      className="py-10 px-10 flex flex-col items-center font-gen-wan-min md:py-16 md:px-10 xl:px-36"
    >
      <h2 className="text-3xl tracking-wider md:text-4xl">專長議題</h2>
      <div className="mt-8 w-full grid grid-cols-1 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {specialities.map(({ title, desc }, index) => {
          const fadeInCls = hasShown
            ? `animate-[fade-in-bt_800ms_ease-in-out_forwards]`
            : "opacity-0";
          const fadeInFastCls = hasShown
            ? `animate-[fade-in-bt_300ms_ease-in-out_forwards]`
            : "opacity-0";

          return (
            <div key={title} className="p-7 pr-0 relative md:p-10 md:pr-10">
              <div
                className={`w-[80px] h-[80px] absolute rounded-full bg-grey z-0 top-0 left-0 opacity-0 ${fadeInFastCls} md:w-[120px] md:h-[120px]`}
                style={{ animationDelay: `${index * 200}ms` }}
              />
              <div
                className={`z-10 relative opacity-0 ${fadeInCls}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-thin tracking-wider md:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 ml-3 font-thin md:text-lg">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Specialties;
