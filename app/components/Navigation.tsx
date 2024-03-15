import React, { useState, useEffect } from "react";

interface Item {
  name: string;
  id: string;
}

export interface NavigationProps {
  items: Item[];
  activeItem: string;
  onClickItem: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  items,
  activeItem,
  onClickItem,
}) => {
  return (
    <div className="w-full hidden justify-between md:flex">
      <nav className="items-center">
        <ul className="flex flex-row space-x-20 tracking-widest">
          {items.map(({ name, id }) => {
            const isActive = id === activeItem;

            return (
              <li
                className={`pb-[2px] relative after:h-[1px] after:w-0 after:bg-text after:absolute after:left-0 after:bottom-0 ${
                  isActive ? "after:!w-full" : ""
                } after:transition-all after:duration-300 hover:after:w-full`}
              >
                <div
                  className="cursor-pointer"
                  data-scroll-to={id}
                  onClick={onClickItem}
                >
                  {name}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
      <a
        href="mailto:yc.liu05@gmail.com"
        className={`pb-[2px] relative after:h-[1px] after:w-0 after:bg-text after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full`}
      >
        聯絡我
      </a>
    </div>
  );
};

export default Navigation;
