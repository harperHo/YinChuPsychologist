import React from "react";

const specialities = [
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
    <div className="flex flex-col items-center py-12 my-20 bg-white ">
      <h2 className="text-4xl tracking-wide">專長議題</h2>
      <div className="grid grid-cols-3 w-full px-24 mt-16">
        {specialities.map(({ title, desc }) => (
          <div key={title} className="p-10 relative">
            <div className="w-[120px] h-[120px] absolute rounded-full bg-[#F3EEE8] z-0 top-0 left-0" />
            <div className="z-10 relative">
              <h3 className="text-3xl font-thin">{title}</h3>
              <p className="mt-3 ml-3 text-lg font-thin">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialties;
