"use client";

import Link from "next/link";

import Image from "next/image";
import Menu from "./menu";
import WallDecor from "./hover/wallDecor";
import Tech from "./hover/tech";
import { useRouter } from "next/navigation";
import Home from "./hover/home";
import Cart from "./cart";
import Customer from "./customer";
import Search from "./search";

export default function Header() {
  const router = useRouter();

  return (
    <>
      <header className="sticky top-0 bg-white z-[4000]  ">
        <div className="max-w-[1800px] m-auto py-4 px-4 lg:px-16 flex justify-between items-center">
          <Image
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onClick={() => router.push("/")}
            src="/svg/logo.svg"
            alt="logo"
            height="10"
            width="10"
            className=" w-16 xs:w-20 lg:w-26 cursor-pointer"
          ></Image>

          <div className="lg:gap-10 gap-5 items-center justify-center hidden lg:flex">
            <div className="relative inline-block group py-5 cursor-pointer">
              <p
                onClick={() => router.push("/collections/wall-decor")}
                className="peer font-bold leading-[0.9] px-[10px] transition-all duration-200  py-[6px]! rounded-full font-area text-[0.8rem] xl:text-[1.125rem]  border border-transparent box-border group-hover:border-black"
              >
                <span className=" flex items-center font-bold font-area text-[0.8rem] xl:text-[1.125rem] leading-none -translate-y-[0.75px]">
                  Wall Decor
                </span>
              </p>
              <WallDecor />
            </div>

            <div className="relative inline-block group  py-5 cursor-pointer">
              <p
                onClick={() => router.push("/collections/home-living")}
                className="peer font-bold leading-[0.9] px-[10px] transition-all duration-200  py-[6px]! rounded-full font-area text-[0.8rem] xl:text-[1.125rem]  border border-transparent box-border group-hover:border-black"
              >
                <span className=" flex items-center font-bold font-area text-[0.8rem] xl:text-[1.125rem] leading-none -translate-y-[0.5px]">
                  Home & Living
                </span>
              </p>
              <Home></Home>
            </div>
            <div className="relative inline-block group  py-5">
              <p
                onClick={() => router.push("/collections/tech-accessories")}
                className="peer font-bold leading-[0.9] px-[10px] transition-all duration-200  py-[6px]! rounded-full font-area text-[0.8rem] xl:text-[1.125rem]  border border-transparent box-border group-hover:border-black"
              >
                <span className=" flex items-center font-bold font-area text-[0.8rem] xl:text-[1.125rem] leading-none -translate-y-[0.5px]">
                  Tech & Accessories
                </span>
              </p>
              <Tech></Tech>
            </div>
            {/* <div className="relative inline-block group  py-5">
              <Link
                href="/Clothing Lifestyle/New"
                className="peer font-bold px-[14px] transition-all duration-200 lg:px-2 py-[6px] rounded-full font-area text-[0.8rem] xl:text-[1.125rem] border border-transparent box-border group-hover:border-black"
              >
                Clothing
              </Link>

              <Clothing></Clothing>
            </div> */}
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Search></Search>
            <Customer></Customer>
            <Cart></Cart>
            <Menu></Menu>
          </div>
        </div>
      </header>
    </>
  );
}
