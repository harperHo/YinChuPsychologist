import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="p-6 flex flex-col items-center justify-center bg-[#96988B] text-white text-center">
      <p className="mb-2 text-sm">劉映竺 諮商心理師</p>
      <p className="text-xs font-thin">© {new Date().getFullYear()} All rights reserved</p>
    </footer>
  );
};

export default Footer;
