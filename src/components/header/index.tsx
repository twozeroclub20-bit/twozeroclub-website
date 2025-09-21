"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, ShoppingCart, Menu } from "lucide-react";
import Image from "next/image";
export default function Header() {
  const [open, toggle] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <>
      <header className="max-w-[1800px] m-auto py-4 px-4 md:px-16  flex justify-between items-center">
        <Image
          src="/svg/logo.svg"
          alt="logo"
          height="10"
          width="10"
          className=" w-16 xs:w-20 lg:w-26 "
        ></Image>

        <div className="gap-10 items-center justify-center hidden md:flex">
          <Link href="#" className="font-[area] text-[1rem] xl:text-[1.125rem]">
            Wall Decor
          </Link>
          <Link href="#" className="font-[area] text-[1rem] xl:text-[1.125rem]">
            Home & Living
          </Link>
          <Link href="#" className="font-[area] text-[1rem] xl:text-[1.125rem]">
            Tech Accessories
          </Link>
          <Link href="#" className="font-[area] text-[1rem] xl:text-[1.125rem]">
            Clothing
          </Link>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <Search className=" w-5 h-5 xs:w-7 xs:h-7"></Search>
          <User className=" w-5 h-5 xs:w-7 xs:h-7"></User>
          <ShoppingCart className=" w-5 h-5 xs:w-7 xs:h-7"></ShoppingCart>
          <Menu
            className=" block md:hidden w-5 h-5 xs:w-7 xs:h-7"
            onClick={() => toggle((val) => !val)}
          ></Menu>
        </div>
      </header>

      <aside
        className={`block md:hidden fixed transition-all duration-200 top-0 left-0 bg-white shadow-2xl h-screen z-[1000] overflow-hidden  ${
          open ? "max-w-72" : "max-w-0"
        }`}
      >
        <div className="w-72  flex flex-col  items-start h-full p-4">
          <Image
            src="/svg/logo.svg"
            alt="logo"
            height="10"
            width="10"
            className=" w-16 xs:w-20 lg:w-26 "
          ></Image>

          <div className=" pl-5 flex flex-col gap-10 items-start justify-center mt-10 ">
            <Link
              href="#"
              className="font-[area] text-[1rem] xl:text-[1.125rem]"
            >
              Wall Decor
            </Link>
            <Link
              href="#"
              className="font-[area] text-[1rem] xl:text-[1.125rem]"
            >
              Home & Living
            </Link>
            <Link
              href="#"
              className="font-[area] text-[1rem] xl:text-[1.125rem]"
            >
              Tech Accessories
            </Link>
            <Link
              href="#"
              className="font-[area] text-[1rem] xl:text-[1.125rem]"
            >
              Clothing
            </Link>
          </div>

          <div className="pl-5 mt-auto mb-10 flex items-center gap-5 justify-center">
            <Search className=" w-5 h-5 xs:w-7 xs:h-7"></Search>
            <User className=" w-5 h-5 xs:w-7 xs:h-7"></User>
            <ShoppingCart className=" w-5 h-5 xs:w-7 xs:h-7"></ShoppingCart>
          </div>
        </div>
      </aside>
      <div
        onClick={() => toggle(false)}
        className={`
          ${open ? "fixed" : "hidden"}
        md:hidden
         bg-[#00000050] absolute top-0 left-0 z-[999] h-screen w-screen
        `}
      ></div>
    </>
  );
}
