import React from "react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <div
      className="pt-[130px] mt-[-130px] md:pt-[159px] md:mt-[-159px]"
      {...(id ? { id } : {})}
    >
      {children}
    </div>
  );
};

export default Section;
