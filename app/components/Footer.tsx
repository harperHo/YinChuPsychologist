import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="p-6 flex flex-col items-center justify-center bg-[#96988B] text-white font-thin text-center md:p-10">
      <p className="">
        劉映竺 諮商心理師
        <br />
        <a href="mailto:yc.liu05@gmail.com">yc.liu05@gmail.com</a>
      </p>
      <p className="mt-6 text-xs md:mt-10">© 2025 All rights reserved</p>
    </footer>
  );
};

export default Footer;
