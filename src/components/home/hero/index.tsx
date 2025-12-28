"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function Hero() {
  const { push } = useRouter();
  return (
    <section className="max-w-[1800px] mt-0 sm:mt-5 md:mt-20 lg:mt-5 px-4 lg:px-16 my-10 gap-5 m-auto flex justify-between items-start md:items-center flex-col-reverse md:flex-row">
      <div className="space-y-[20px]">
        <div className="space-y-[14px]  xl:w-[600px] lg:mr-0">
          <h2 className=" w-full  text-[3rem] sm:text-[3.5rem]  lg:text-[4rem] leading-[100%] tracking-[-2%] font-editorial ">
            Art for Inspiring Spaces
          </h2>
          <p className=" w-full font-medium lg:w-[80%] text-[1rem] font-area leading-[120%] tracking-[-2%]">
            Transform your home and everyday carry. Exclusive prints, posters,
            phone cases & home decor – designed, curated and handpicked by our
            team.
          </p>
        </div>
        <Button
          onClick={() => push("/collections/trending")}
          className="
    font-semibold
    bg-[#F33C14] hover:bg-[#f0532f]
    transition-all duration-200
    text-white
    rounded-3xl
font-area
    px-[20px]! py-[10px]!
    h-auto!
    flex items-center justify-center
    leading-[150%]
  "
        >
          <span className=" inline-flex -translate-y-[1px]">Explore</span>
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
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        src="/images/hero.png"
        alt="hero-image"
        width="1200"
        height="1000"
        className=" w-full  hidden aspect-[4/3] sm:block md:w-[400px] lg:w-[500px] 2xl:w-[700px]  rounded-[10px]"
      ></Image>
    </section>
  );
}
