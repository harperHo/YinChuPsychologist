import React from "react";
import Link from "next/link";

interface Item {
  name: string;
  id: string;
}

export interface NavigationProps {
  items: Item[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav className="hidden md:flex items-center">
      <ul className="flex flex-row space-x-20 tracking-widest">
        {items.map(({ name, id }) => (
          <li>
            <Link href={`#${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
