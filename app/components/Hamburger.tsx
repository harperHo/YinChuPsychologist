import React from "react";

interface HamburgerProps {
  shouldTransform: boolean;
  onClick: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ shouldTransform, onClick }) => {
  const topLineCls = shouldTransform
    ? "animate-[burger-rotate-right_300ms_ease-in-out_forwards]"
    : shouldTransform === false
    ? "animate-[burger-rotate-right-reverse_300ms_ease-in-out_forwards]"
    : "";

  const bottomLineCls = shouldTransform
    ? "animate-[burger-rotate-left_300ms_ease-in-out_forwards]"
    : shouldTransform === false
    ? "animate-[burger-rotate-left-reverse_300ms_ease-in-out_forwards]"
    : "";

  return (
    <div
      className={`absolute right-10 space-y-[11px] cursor-pointer md:hidden`}
      onClick={onClick}
    >
      <div className={`w-[32px] h-px bg-black ${topLineCls}`} />
      <div className={`w-[32px] h-px bg-black ${bottomLineCls}`} />
    </div>
  );
};

export default Hamburger;
