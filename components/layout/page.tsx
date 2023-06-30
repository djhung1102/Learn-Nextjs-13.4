import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div className="flex items-center flex-col border-r border-gray-500 h-screen">
      <Link href="/">
        <span>Movies</span>
      </Link>
      <Link href="/about">
        <span>About</span>
      </Link>
    </div>
  );
};

export default Menu;
