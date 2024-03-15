"use client";

import React, { useState, useEffect, useCallback } from "react";

const BackTop: React.FC = () => {
  const [show, setShow] = useState(false);

  const checkScrollHeight = useCallback(() => {
    if (!show && window.scrollY > 400) {
      setShow(true);
    } else if (show && window.scrollY <= 400) {
      setShow(false);
    }
  }, [show]);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollHeight);
    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, [show]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`w-[50px] h-[50px] bg-brick-red rounded-full cursor-pointer fixed right-[20px] bottom-[32px] md:right-[32px] 
        flex items-center justify-center ${
          show ? "opacity-60" : "opacity-0"
        } hover:opacity-100
        transition-opacity duration-300
        `}
      onClick={scrollToTop}
    >
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </div>
  );
};

export default BackTop;
