import Link from "next/link";
import React from "react";
import Image from "next/image";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full p-6 dark:shadow-none shadow-light-300 sm:px-12 gap-5 ">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="./images/site-logo.svg"
          width={23}
          height={23}
          alt="Code Overflow Logo"
        />

        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          <span className="">Code Overflow</span>
        </p>
      </Link>
      <p>Global Search</p>

      <div className="flex-between gap-5">
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
