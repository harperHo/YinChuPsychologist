import React from "react";

import useIntersectionObserver from "../hooks/useIntersectionObserver";

const experiences = [
  {
    title: "擁抱心理諮商所",
    subTitle: "兼任心理師",
  },
  {
    title: "臺灣科技大學",
    subTitle: "團體帶領者",
  },
  {
    title: "基隆看守所毒品方案",
    subTitle: "合作心理師",
  },
  {
    title: "暖心全人諮商中心",
    subTitle: "兼任心理師",
  },
  {
    title: "淡水樂智據點",
    subTitle: "團體帶領者",
  },
  {
    title: "台北市立聯合醫院松德院區",
    subTitle: "思想起心理治療中心 治療師",
  },
  {
    title: "中國文化大學",
    subTitle: "心理輔導學系研究所 碩士",
  },
];

interface ExperienceProps {
  title: string;
  subTitle?: string;
}

const Experience: React.FC<ExperienceProps> = ({ title, subTitle }) => {
  return (
    <div>
      <div>{title}</div>
      {subTitle && <div>{subTitle}</div>}
    </div>
  );
};

const Experiences: React.FC = () => {
  const { hasShown, ref } = useIntersectionObserver({
    threshold: 0.25,
  });

  const growLineCls = hasShown
    ? `before:h-full md:before:w-full`
    : "before:h-0 md:before:w-0";
  const fadeInCls = hasShown
    ? `animate-[fade-in_300ms_ease-in-out_forwards]`
    : "opacity-0";

  return (
    <div
      ref={ref}
      className="py-10 flex flex-col items-center bg-grey font-gen-wan-min overflow-hidden md:p-16 md:h-[500px] lg:items-start lg:flex-row"
    >
      <div className="mb-8 lg:mb-0 lg:w-[300px]">
        <h2 className="text-3xl tracking-wider md:text-4xl">重要經歷</h2>
      </div>
      <div
        className={`flex flex-col w-full relative md:w-auto md:[writing-mode:vertical-lr]
        before:w-px before:left-[25px] before:absolute before:bg-sand before:duration-1000 md:before:h-px md:before:top-[5px] md:before:left-0 ${growLineCls} `}
      >
        {experiences.map(({ title, subTitle }, index) => (
          <div
            key={`${title}_${subTitle}`}
            className={`py-2 pl-12 flex items-center relative text-lg opacity-0 md:px-6 md:pt-[40px] md:text-xl
            before:w-[11px] before:h-[11px] before:absolute before:left-[20px] before:bg-sand before:rounded-full md:before:top-0 md:before:left-auto ${fadeInCls}`}
            style={{
              animationDelay: `${index * (1000 / experiences.length)}ms`,
            }}
          >
            <Experience title={title} subTitle={subTitle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
