"use client";

import Link from "next/link";
import { Search, User, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Menu from "./menu";
import Clothing from "./hover/clothing";
import WallDecor from "./hover/wallDecor";
import Tech from "./hover/tech";
import { useRouter } from "next/navigation";
import Home from "./hover/home";
import Cart from "./cart";
export default function Header() {
  const router = useRouter();
  return (
    <>
      <header className="sticky top-0 bg-white z-[4000]  ">
        <div className="max-w-[1800px] m-auto py-4 px-4 md:px-16 flex justify-between items-center">
          <Image
            onClick={() => router.push("/")}
            src="/svg/logo.svg"
            alt="logo"
            height="10"
            width="10"
            className=" w-16 xs:w-20 lg:w-26 "
          ></Image>

          <div className="lg:gap-10 gap-5 items-center justify-center hidden md:flex">
            <div className="relative inline-block group  py-5">
              <Link
                href="#"
                className="peer  px-1 transition-all duration-200 lg:px-2 py-0.5 rounded-full font-[area] text-[0.8rem] xl:text-[1.125rem] border border-transparent box-border group-hover:border-black"
              >
                Wall Decor
              </Link>

              <WallDecor></WallDecor>
            </div>

            <div className="relative inline-block group  py-5">
              <Link
                href="#"
                className="peer  px-1 transition-all duration-200 lg:px-2 py-0.5 rounded-full font-[area] text-[0.8rem] xl:text-[1.125rem] border border-transparent box-border group-hover:border-black"
              >
                Home & Living
              </Link>

              <Home></Home>
            </div>
            <div className="relative inline-block group  py-5">
              <Link
                href="#"
                className="peer  px-1 transition-all duration-200 lg:px-2 py-0.5 rounded-full font-[area] text-[0.8rem] xl:text-[1.125rem] border border-transparent box-border group-hover:border-black"
              >
                Tech Accessories
              </Link>

              <Tech></Tech>
            </div>
            <div className="relative inline-block group  py-5">
              <Link
                href="#"
                className="peer  px-1 transition-all duration-200 lg:px-2 py-0.5 rounded-full font-[area] text-[0.8rem] xl:text-[1.125rem] border border-transparent box-border group-hover:border-black"
              >
                Clothing
              </Link>

              <Clothing></Clothing>
            </div>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Search className=" w-5 h-5 xs:w-7 xs:h-7"></Search>
            <User className=" w-5 h-5 xs:w-7 xs:h-7"></User>
            <Cart></Cart>
            <Menu></Menu>
          </div>
        </div>
      </header>
    </>
  );
}
