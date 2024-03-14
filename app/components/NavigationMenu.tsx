import React, { useCallback, Dispatch, SetStateAction } from "react";
import Link from "next/link";

import { NavigationProps } from "./Navigation";

interface NavigationMenuProps {
  open: boolean;
  items: NavigationProps["items"];
  setMenuOpened: Dispatch<SetStateAction<boolean>>;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  open,
  items,
  setMenuOpened,
}) => {
  const onClickItem = useCallback(() => {
    setMenuOpened(false);
  }, []);

  return (
    <nav
      className={`absolute bg-primary left-0 top-0 w-screen h-[calc(100vh-5em)] flex items-center ${
        open ? "visible" : "invisible"
      } ${open ? "opacity-1" : "opacity-0"} transition-all duration-500`}
    >
      <ul className="pl-16 text-2xl space-y-8">
        {items.map(({ name, id }) => (
          <li>
            <Link href={`#${id}`} onClick={onClickItem}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
