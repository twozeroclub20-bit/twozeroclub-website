"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function Hero() {
  const { push } = useRouter();
  return (
    <section className="max-w-[1800px] mt-0 sm:mt-5 md:mt-20 lg:mt-5 px-4 lg:px-16 my-10 gap-5 m-auto flex justify-between items-start md:items-center flex-col-reverse md:flex-row">
      <div className="  flex flex-col gap-4 xl:w-[600px]  lg:mr-0">
        <h2 className=" w-full  text-[3rem] sm:text-[3.5rem]  lg:text-[4rem] leading-[3rem] sm:leading-[3.5rem]  tracking-[-2%] lg:leading-[4rem] font-[editorial] ">
          Art for Inspiring Spaces
        </h2>
        <p className=" w-full lg:w-[80%] text-[1rem] md:text-[1.2rem] sm:text-[1.5rem] font-[area] leading-[120%] tracking-[-2%]">
          Explore our curated collection of premium art prints
        </p>
        <Button
          onClick={() => push("/Wall Decor/New")}
          className="!text-[1rem] font-normal w-fit bg-[#F33C14] hover:bg-[#f0532f] transition-all duration-200 text-white  p-[18px]! md:p-[24px]! rounded-full"
        >
          Add to basket
        </Button>
      </div>
      <div
        className="
        sm:hidden block
    w-full h-[400px] 
    md:w-[400px] 
    lg:w-[700px] 
    xl:w-[900px] 
    rounded-[10px] 
    bg-cover 
    bg-center 
    bg-no-repeat
  "
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      ></div>
      <Image
        src="/images/hero.png"
        alt="hero-image"
        width="1200"
        height="1000"
        className=" w-full  hidden sm:block md:w-[400px] lg:w-[700px] xl:w-[900px] rounded-[10px]"
      ></Image>
    </section>
  );
}
