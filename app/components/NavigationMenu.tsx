import React, { useCallback, Dispatch, SetStateAction } from "react";

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
      className={`absolute bg-sand left-0 top-0 w-screen h-dvh flex items-center ${
        open ? "visible" : "invisible"
      } ${open ? "opacity-1" : "opacity-0"} transition-all duration-500`}
    >
      <ul className="pl-16 text-2xl space-y-8">
        {items.map(({ name, id, href }) => (
          <li key={id}>
            {href ? (
              <a
                className="cursor-pointer"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            ) : (
              <div
                className="cursor-pointer"
                data-scroll-to={id}
                onClick={onClick}
              >
                {name}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
