import React from "react";
import Link from "next/link";

interface NavigationMenuProps {
  open: boolean;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ open }) => {
  return (
    <nav
      className={`absolute bg-primary left-0 top-0 w-screen h-[calc(100vh-5em)] flex items-center ${
        open ? "visible" : "invisible"
      } ${open ? "opacity-1" : "opacity-0"} transition-all duration-500`}
    >
      <ul className="pl-16 text-4xl space-y-8">
        <li>
          <Link href="#about">關於</Link>
        </li>
        <li>
          <Link href="#specialties">專長議題</Link>
        </li>
        <li>
          <Link href="#experiences">重要經歷</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
