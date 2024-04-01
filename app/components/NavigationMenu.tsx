import React, { useCallback, Dispatch, SetStateAction } from "react";
import Link from "next/link";

import { NavigationProps } from "./Navigation";

interface NavigationMenuProps {
  open: boolean;
  items: NavigationProps["items"];
  activeItem: string;
  onClickItem: (e: React.MouseEventHandler<HTMLDivElement>) => void;
  setMenuOpened: Dispatch<SetStateAction<boolean>>;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  open,
  items,
  activeItem,
  onClickItem,
  setMenuOpened,
}) => {
  const onClick = useCallback((e) => {
    setMenuOpened(false);
    onClickItem(e);
  }, []);

  return (
    <nav
      className={`absolute bg-sand left-0 top-0 w-screen h-[calc(100vh-5em)] flex items-center ${
        open ? "visible" : "invisible"
      } ${open ? "opacity-1" : "opacity-0"} transition-all duration-500`}
    >
      <ul className="pl-16 text-2xl space-y-8">
        {items.map(({ name, id }) => (
          <li key={id}>
            <div
              className="cursor-pointer"
              data-scroll-to={id}
              onClick={onClick}
            >
              {name}
            </div>
          </li>
        ))}
        <li>
          <a href="mailto:yc.liu05@gmail.com">聯絡我</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
