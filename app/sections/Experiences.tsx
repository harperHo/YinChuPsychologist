import React from "react";

const experiences = [
  <div>
    <div>中國文化大學</div>
    <div>心理輔導學系研究所 碩士</div>
  </div>,
  <div>
    <div>擁抱心理諮商所</div>
    <div>兼任心理師</div>
  </div>,
  <div>
    <div>暖心全人諮商中心</div>
    <div>兼任心理師</div>
  </div>,
  <div>
    <div>臺北城市科大</div>
    <div>兼任通識課講師</div>
  </div>,
  <div>
    <div>戒菸專線服務中心</div>
    <div>兼任諮詢員</div>
  </div>,
  <div>
    <div>淡水樂智據點</div>
    <div>團體帶領者</div>
  </div>,
  <div>
    <div>全國自殺防治中心 專員</div>
  </div>,
  <div>
    <div>台北市立聯合醫院松德院區</div>
    <div>思想起心理治療中心 治療師</div>
  </div>,
];

const Experiences: React.FC = () => {
  return (
    <div className="p-16 h-[500px] flex bg-primary-2 font-gen-wan-min overflow-hidden">
      <div className="w-[300px]">
        <h2 className="text-3xl tracking-wider md:text-4xl">重要經歷</h2>
      </div>
      <div className="flex-1 flex flex-col w-full [writing-mode:vertical-lr]">
        {experiences.map((experience) => (
          <div
            className="px-6 flex items-center relative text-xl pt-[40px]
            before:w-[11px] before:h-[11px] before:absolute before:bg-primary before:rounded-full before:top-0
            after:w-full after:h-[1px] after:absolute after:bg-primary after:top-[5px]"
          >
            {experience}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
