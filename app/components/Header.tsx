"use client";

import React, { useCallback, useState, useEffect } from "react";
import Image from "next/image";

import Navigation from "./Navigation";
import NavigationMenu from "./NavigationMenu";
import Hamburger from "./Hamburger";

const menuItems = [
  {
    name: "關於",
    id: "about",
  },
  {
    name: "專長議題",
    id: "specialties",
  },
  {
    name: "重要經歷",
    id: "experiences",
  },
];

const Header: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState("about");
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("div[id]");
      const scrollPosition = window.scrollY;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        const nextSection = sections[i + 1] as HTMLElement;
        const upperThreshold = section.offsetTop;
        const lowerThreshold = nextSection
          ? nextSection.offsetTop
          : upperThreshold + section.offsetHeight;

        if (
          scrollPosition >= upperThreshold &&
          scrollPosition < lowerThreshold
        ) {
          setActiveSectionId(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickItem = useCallback((e) => {
    const id = e.target.getAttribute("data-scroll-to");

    if (id) {
      const section = document.getElementById(id);
      window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
    }
  }, []);

  const onClickLogo = useCallback((e) => {
    const section = document.getElementById("about");
    window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
  }, []);

  const onClickHamburger = useCallback(() => {
    setMenuOpened(!menuOpened);
  }, [menuOpened]);

  return (
    <header className="px-6 w-full h-[130px] fixed top-0 flex flex-row items-center justify-between bg-sand z-20 md:px-32 md:h-[160px]">
      <div
        className="w-[100px] h-[104px] absolute top-1/2 left-1/2 translate-y-1/2-nagative translate-x-1/2-nagative cursor-pointer md:w-[130px] md:h-[135px]"
        onClick={onClickLogo}
      >
        <Image src="/logo.png" fill alt="logo" />
      </div>
      <Navigation
        items={menuItems}
        activeItem={activeSectionId}
        onClickItem={onClickItem}
      />
      <NavigationMenu
        open={menuOpened}
        items={menuItems}
        activeItem={activeSectionId}
        onClickItem={onClickItem}
        setMenuOpened={setMenuOpened}
      />
      <Hamburger shouldTransform={menuOpened} onClick={onClickHamburger} />
    </header>
  );
};

export default Header;
