import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-green pt-[53px] pb-[34px] ">
      <div className="max-w-[1800px]  m-auto px-5 md:px-20 xl:px-32 flex justify-evenly items-start flex-wrap ">
        <div className="flex flex-col gap-[20px] w-1/2 lg:w-1/4  ">
          <h2 className="font-editorial text-[1.4rem] sm:text-[1.625rem]">
            Shop
          </h2>
          <ul className="!p-0 text-[1rem] sm:text-[1.125rem] flex flex-col font-area">
            <Link href="/collections/new-footer">New</Link>
            <Link href="/collections/bestsellers-footer">Bestsellers</Link>
            <Link href="/collections/trending-footer">Trending</Link>
            <Link href="/collections/as-seen-on-social-footer">
              As seen on social
            </Link>
          </ul>
          {/* <h2 className="pt-[39px] text-muted-foreground hidden xl:block">
            © 2025 Two Zero Club
          </h2> */}
        </div>
        <div className="flex flex-col gap-[20px] w-1/2 lg:w-1/4  ">
          <h2 className="font-editorial text-[1.4rem] sm:text-[1.625rem]">
            Help
          </h2>
          <ul className="!p-0 text-[1rem] sm:text-[1.125rem] flex flex-col  font-area">
            <Link href="/faq">FAQ</Link>
            <Link href="/terms-service">Policies</Link>
            <Link href="/contact">Contact Us</Link>
          </ul>
        </div>
        <div className="flex flex-col gap-[20px] w-1/2 lg:w-1/4  ">
          <h2 className="font-editorial text-[1.4rem] sm:text-[1.625rem]">
            About Us
          </h2>
          <ul className="!p-0 text-[1rem] sm:text-[1.125rem] flex flex-col font-area">
            <Link href="/about">Our Story</Link>
            <Link href="/blogs">Blogs</Link>
          </ul>
        </div>
        <div className="flex flex-col gap-[20px] w-1/2 lg:w-1/4  ">
          <h2 className="font-editorial text-[1.4rem] sm:text-[1.625rem]">
            Stay Connected
          </h2>
          <ul className="!p-0 flex gap-2">
            <Image
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              src="/svg/facebook.svg"
              alt="facebook"
              height="30"
              width="30"
            ></Image>
            <Image
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              src="/svg/tiktok.svg"
              alt="facebook"
              height="30"
              width="30"
            ></Image>
            <Image
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              src="/svg/instagram.svg"
              alt="facebook"
              height="30"
              width="30"
            ></Image>
            <Image
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              src="/svg/pinterest.svg"
              alt="facebook"
              height="30"
              width="30"
            ></Image>
          </ul>
        </div>
      </div>
      <div className="max-w-[1800px] pt-[39px]  m-auto  px-5 sm:px-20 xl:px-32  ">
        <h2 className=" text-muted-foreground">© 2025 Two Zero Club</h2>
      </div>
    </footer>
  );
}
