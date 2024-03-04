import React from "react";

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <main className="mt-[180px]">{children}</main>;
};

export default Content;
