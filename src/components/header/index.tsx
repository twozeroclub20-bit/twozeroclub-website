"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Menu from "./menu";
import Clothing from "./hover/clothing";
import WallDecor from "./hover/wallDecor";
import Tech from "./hover/tech";
import Home from "./hover/home";
export default function Header() {
  return (
    <>
      <header className="max-w-[1800px] m-auto py-4 px-4 md:px-16 flex justify-between items-center">
        <Image
          src="/svg/logo.svg"
          alt="logo"
          height="10"
          width="10"
          className=" w-16 xs:w-20 lg:w-26 "
        ></Image>

        <div className="gap-10 items-center justify-center hidden md:flex">
          <div className="relative inline-block group  py-5">
            <Link
              href="#"
              className="peer font-[area] text-[0.8rem] xl:text-[1.125rem]"
            >
              Wall Decor
            </Link>

            <WallDecor></WallDecor>
          </div>

          <div className="relative inline-block group  py-5">
            <Link
              href="#"
              className="peer font-[area] text-[0.8rem] xl:text-[1.125rem]"
            >
              Home & Living
            </Link>

            <Home></Home>
          </div>
          <div className="relative inline-block group  py-5">
            <Link
              href="#"
              className="peer font-[area] text-[0.8rem] xl:text-[1.125rem]"
            >
              Tech Accessories
            </Link>

            <Tech></Tech>
          </div>
          <div className="relative inline-block group  py-5">
            <Link
              href="#"
              className="peer font-[area] text-[0.8rem] xl:text-[1.125rem]"
            >
              Clothing
            </Link>

            <Clothing></Clothing>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <Search className=" w-5 h-5 xs:w-7 xs:h-7"></Search>
          <User className=" w-5 h-5 xs:w-7 xs:h-7"></User>
          <ShoppingCart className=" w-5 h-5 xs:w-7 xs:h-7"></ShoppingCart>
          <Menu></Menu>
        </div>
      </header>
    </>
  );
}
