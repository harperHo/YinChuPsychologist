import React from "react";

export const specialities = [
  {
    title: "長期深度自我探索",
    desc: "原生家庭、重大生命事件、創傷事件等自我影響之探索、存在意義、孤獨感",
  },
  {
    title: "原生家庭議題",
    desc: "關係界限、童年失落、母女/手足關係",
  },
  {
    title: "人際關係議題",
    desc: "失戀、多重關係、社交焦慮、關係破裂、創傷",
  },
  {
    title: "多元性別與自我認同",
    desc: "性向探索與認同、伴侶相處",
  },
  {
    title: "情感性精神疾患",
    desc: "憂鬱、焦慮等",
  },
  {
    title: "心理動力取向諮商",
  },
];

const Specialties: React.FC = () => {
  return (
    <div className="py-10 px-10 flex flex-col items-center font-gen-wan-min md:py-16 md:px-36">
      <h2 className="text-3xl tracking-wider md:text-4xl">專長議題</h2>
      <div className="mt-8 w-full grid grid-cols-1 md:mt-16 md:grid-cols-3">
        {specialities.map(({ title, desc }) => (
          <div key={title} className="p-7 pr-0 relative md:p-10 md:pr-10">
            <div className="w-[80px] h-[80px] absolute rounded-full bg-grey z-0 top-0 left-0 md:w-[120px] md:h-[120px]" />
            <div className="z-10 relative">
              <h3 className="text-xl font-thin tracking-wider md:text-2xl">
                {title}
              </h3>
              <p className="mt-3 ml-3 font-thin md:text-lg">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialties;
