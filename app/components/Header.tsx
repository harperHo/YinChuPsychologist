"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";

import Navigation from "./Navigation";
import NavigationMenu from "./NavigationMenu";
import Hamburger from "./Hamburger";

const Header: React.FC = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const onClickHamburger = useCallback(() => {
    setMenuOpened(!menuOpened);
  }, [menuOpened]);

  return (
    <header className="fixed top-0 flex flex-row items-center w-full px-6 md:px-32 bg-primary h-[180px] z-20">
      <Image
        className="absolute top-0 left-1/2 translate-x-1/2-nagative"
        src="/logo.png"
        width={180}
        height={180}
        alt="logo"
      />
      <Navigation />
      <NavigationMenu open={menuOpened} />
      <Hamburger shouldTransform={menuOpened} onClick={onClickHamburger} />
      {/* <div className="flex-1 hidden">
        <Navigation />
      </div>
      <div className="flex-1 flex justify-center">
        
      </div>
      <div className="flex-1">
        <NavigationMenu open={menuOpened} />
        <Hamburger shouldTransform={menuOpened} onClick={onClickHamburger} />
      </div> */}
    </header>
  );
};

export default Header;
