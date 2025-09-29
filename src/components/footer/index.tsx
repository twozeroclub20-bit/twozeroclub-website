import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-green pt-16 ">
      <div className="max-w-[1800px] m-auto  px-10 sm:px-20 xl:px-32 flex justify-evenly items-start flex-wrap">
        <div className="flex flex-col gap-4 w-full sm:w-1/2 lg:w-1/4  p-4">
          <h2 className="font-[editorial] text-[1.625rem]">Shopping</h2>
          <ul className="!p-0 text-[1.125rem]">
            <li>New</li>
            <li>BestSeller</li>
            <li>Trending</li>
            <li>As seen on Social</li>
          </ul>
          <h2 className="mt-5 text-muted-foreground hidden xl:block">
            © 2025 Two Zero Club
          </h2>
        </div>
        <div className="flex flex-col gap-4 w-full sm:w-1/2 lg:w-1/4  p-4">
          <h2 className="font-[editorial] text-[1.625rem]">Help</h2>
          <ul className="!p-0 text-[1.125rem] flex flex-col ">
            <Link href="/faq">FAQ</Link>
            <Link href="/terms-service">Policies</Link>
            <Link href="/contact">Contact Us</Link>
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-full sm:w-1/2 lg:w-1/4  p-4">
          <h2 className="font-[editorial] text-[1.625rem]">About Us</h2>
          <ul className="!p-0 text-[1.125rem]">
            <Link href="/about">Our Story</Link>
            <li>Journal</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-full sm:w-1/2 lg:w-1/4  p-4">
          <h2 className="font-[editorial] text-[1.625rem]">Stay Connected</h2>
          <ul className="!p-0 flex gap-2">
            <Image
              src="/svg/facebook.svg"
              alt="facebook"
              height="30"
              width="30"
            ></Image>
            <Image
              src="/svg/tiktok.svg"
              alt="facebook"
              height="30"
              width="30"
            ></Image>
            <Image
              src="/svg/instagram.svg"
              alt="facebook"
              height="30"
              width="30"
            ></Image>
            <Image
              src="/svg/pinterest.svg"
              alt="facebook"
              height="30"
              width="30"
            ></Image>
          </ul>
        </div>
      </div>
      <div className="max-w-[2000px] pb-5 m-auto  px-12 sm:px-22 xl:px-34 block xl:hidden ">
        <h2 className="mt-5 text-muted-foreground">© 2025 Two Zero Club</h2>
      </div>
    </footer>
  );
}
