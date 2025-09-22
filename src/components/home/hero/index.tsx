import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
    <section className="max-w-[1800px] mt-10 md:mt-20 lg:mt-5 px-4 md:px-16 my-10 gap-5 m-auto flex justify-between items-center flex-col-reverse md:flex-row">
      <div className="w-full lg:w-[600px]  flex flex-col gap-4   lg:mr-0">
        <h2 className="text-[3rem] sm:text-[4rem] font-[editorial] leading-15 md:leading-18">
          Art for Inspiring Spaces
        </h2>
        <p className="text-[1.2rem] sm:ext-[1.5rem]">
          Explore our curated collection of premium art prints
        </p>
        <Button className="!text-[1rem] font-normal w-fit bg-[#F33C14] hover:bg-[#f0532f] transition-all duration-200 text-white !p-6 rounded-full">
          Add to basket
        </Button>
      </div>
      <Image
        src="/images/hero.png"
        alt="hero-image"
        width="1200"
        height="800"
        className="  w-full  md:w-[400px] lg:w-[700px] rounded-[10px]"
      ></Image>
    </section>
  );
}
