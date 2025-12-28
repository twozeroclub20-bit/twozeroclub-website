"use client";

import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <section className="w-full px-4 sm:px-10 lg:px-20 py-20 max-w-[1800px] m-auto">
      <div className="2xl:w-[1200px] xl:pl-32">
        <p className=" font-editorial text-[1.75rem] md:text-[2rem] xl:text-[2.25rem] leading-[2.5rem] tracking-[-2%] mb-5">
          TwoZero Club is a modern lifestyle brand living at the intersection of
          art and culture. We create made-to-order prints, apparel, and everyday
          objects – exclusive drops designed to bring meaning & joy into your
          everyday.
        </p>
        <p className="text-[1rem] lg:text-[1.25rem] font-area leading-[120%]">
          We were born from the belief that art shouldn’t live only in galleries
          – it should shape how we live, dress, work and create spaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-3 my-20">
        <Image
          src="/images/about/about-1.png"
          alt="about-1"
          width="1000"
          height="1000"
          className="w-full max-w-[450px] md:max-w-full"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        ></Image>
        <Image
          src="/images/about/about-2.png"
          alt="about-1"
          width="1000"
          height="1000"
          className="w-full max-w-[450px] md:max-w-full"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        ></Image>
        <Image
          src="/images/about/about-3.png"
          alt="about-1"
          width="1000"
          height="1000"
          className="w-full max-w-[450px] md:max-w-full"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        ></Image>
      </div>

      <div className="xl:w-[1000px] xl:ml-auto flex flex-col gap-8">
        <p className=" font-area text-[1.5625rem] leading-[120%] font-bold">
          We collaborate with independent artists to create collections spanning
          art prints, apparel, home objects and everyday carry. Each piece is
          expertly curated, made to order & crafted only when you choose it.
        </p>

        <p className=" font-area text-[1.5625rem]  leading-[120%] font-bold">
          No shelves of stock. No mass overproduction. Just thoughtful designs
          produced exclusively for you, by real artists.
        </p>

        <p className="text-[1rem] lg:text-[1.25rem] leading-[120%] font-area">
          TwoZero Club is not store. It’s a philosophy, objects of meaning,
          drops that matter, and a community that values creativity,
          originality, and design-led living.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-3 my-20">
        <Image
          src="/images/about/about-4.png"
          alt="about-4"
          width="1000"
          height="1000"
          className="w-full max-w-[450px] md:max-w-full"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        ></Image>
        <Image
          src="/images/about/about-5.png"
          alt="about-5"
          width="1000"
          height="1000"
          className="w-full max-w-[450px] md:max-w-full"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        ></Image>
        <Image
          src="/images/about/about-6.png"
          alt="about-6"
          width="1000"
          height="1000"
          className="w-full max-w-[450px] md:max-w-full"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        ></Image>
      </div>

      <div className="flex justify-between items-center  my-10">
        <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-editorial ">
          Join the Club on Instagram
        </h2>
        <Image
          src="/svg/instagram.svg"
          alt="instagram"
          width="30"
          height="30"
          className="hidden md:block"
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
        ></Image>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-3">
        <Image
          src="/images/instagram/instagram-1.png"
          alt="instagram-1"
          width="1000"
          height="1000"
          className="w-full"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        ></Image>
        <Image
          src="/images/instagram/instagram-2.png"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          alt="instagram-2"
          width="1000"
          height="1000"
          className="w-full"
        ></Image>
        <Image
          src="/images/instagram/instagram-3.png"
          alt="instagram-3"
          width="1000"
          height="1000"
          className="w-full"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        ></Image>
        <Image
          src="/images/instagram/instagram-4.png"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          alt="instagram-4"
          width="1000"
          height="1000"
          className="w-full"
        ></Image>
        <Image
          src="/images/instagram/instagram-5.png"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          alt="instagram-5"
          width="1000"
          height="1000"
          className="w-full"
        ></Image>
        <Image
          src="/images/instagram/instagram-6.png"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          alt="instagram-6"
          width="1000"
          height="1000"
          className="w-full"
        ></Image>
        <Image
          src="/images/instagram/instagram-7.png"
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
          alt="instagram-7"
          width="1000"
          height="1000"
          className="w-full"
        ></Image>
        <Image
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
          src="/images/instagram/instagram-8.png"
          alt="instagram-8"
          width="1000"
          height="1000"
          className="w-full"
        ></Image>
        <Image
          src="/images/instagram/instagram-9.png"
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
          alt="instagram-9"
          width="1000"
          height="1000"
          className="w-full"
        ></Image>
        <Image
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
          src="/images/instagram/instagram-10.png"
          alt="instagram-10"
          width="1000"
          height="1000"
          className="w-full"
        ></Image>
        <Image
          src="/images/instagram/instagram-11.png"
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
          alt="instagram-11"
          width="1000"
          height="1000"
          className="w-full"
        ></Image>
        <Image
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
          src="/images/instagram/instagram-12.png"
          alt="instagram-12"
          width="1000"
          height="1000"
          className="w-full"
        ></Image>
      </div>

      <div></div>
    </section>
  );
}
