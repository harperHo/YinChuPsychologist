"use client";

import React, { useCallback, useState } from "react";
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
  const [menuOpened, setMenuOpened] = useState(false);

  const onClickHamburger = useCallback(() => {
    setMenuOpened(!menuOpened);
  }, [menuOpened]);

  return (
    <header className="px-6 w-full h-[130px] fixed top-0 flex flex-row items-center bg-primary z-20 md:px-32 md:h-[160px]">
      <div className="w-[100px] h-[104px] absolute top-1/2 left-1/2 translate-y-1/2-nagative translate-x-1/2-nagative md:w-[130px] md:h-[135px]">
        <Image src="/logo.png" fill alt="logo" />
      </div>
      <Navigation items={menuItems} />
      <NavigationMenu
        open={menuOpened}
        items={menuItems}
        setMenuOpened={setMenuOpened}
      />
      <Hamburger shouldTransform={menuOpened} onClick={onClickHamburger} />
    </header>
  );
};

export default Header;
