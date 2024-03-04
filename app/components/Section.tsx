import React from "react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return <div {...(id ? { id } : {})}>{children}</div>;
};

export default Section;
