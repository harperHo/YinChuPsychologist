import React from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center">
      <ul className="flex flex-row space-x-20 tracking-widest">
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

export default Navigation;
