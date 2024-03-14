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
    <div className="py-10 flex flex-col items-center bg-primary-2 font-gen-wan-min overflow-hidden md:p-16 md:h-[500px] md:flex-row md:items-start">
      <div className="mb-4 md:mb-0 md:w-[300px]">
        <h2 className="text-3xl tracking-wider md:text-4xl">重要經歷</h2>
      </div>
      <div className="flex-1 flex flex-col w-full md:[writing-mode:vertical-lr]">
        {experiences.map((experience) => (
          <div
            className="pt-6 pl-12 flex items-center relative text-lg md:px-6 md:pt-[40px] md:text-xl
            before:w-[11px] before:h-[11px] before:absolute before:left-[20px] before:bg-primary before:rounded-full md:before:top-0 md:before:left-auto
            after:w-[1px] after:h-full after:absolute after:left-[25px] after:bg-primary md:after:w-full md:after:h-[1px] md:after:top-[5px] md:after:left-auto"
          >
            {experience}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
