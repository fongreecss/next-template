'use client'

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import ApplicationLogo from "../Utils/ApplicationLogo";

type MenuProps = {
  logo?: string;
};

const NormalMenu: FC<MenuProps> = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <ApplicationLogo size="1rem" />
        </div>
      <div className="block lg:hidden">

      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
            <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
              Home
            </Link>
          <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
              About
          </Link>
          <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
              Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NormalMenu;
