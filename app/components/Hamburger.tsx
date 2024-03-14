import React from "react";

interface HamburgerProps {
  shouldTransform: boolean;
  onClick: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ shouldTransform, onClick }) => {
  return (
    <div
      className={`absolute right-10 space-y-[11px] cursor-pointer md:hidden`}
      onClick={onClick}
    >
      <div
        className={`w-[32px] h-px bg-black ${
          shouldTransform
            ? "animate-[burgerRotateRight_300ms_ease-in-out_forwards]"
            : "animate-[burgerRotateRightReverse_300ms_ease-in-out_forwards]"
        }`}
      />
      <div
        className={`w-[32px] h-px bg-black ${
          shouldTransform
            ? "animate-[burgerRotateLeft_300ms_ease-in-out_forwards]"
            : "animate-[burgerRotateLeftReverse_300ms_ease-in-out_forwards]"
        }`}
      />
    </div>
  );
};

export default Hamburger;
