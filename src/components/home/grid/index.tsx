"use client";
import React from "react";
import Image from "next/image";

export default function Grid() {
  return (
    <section className="max-w-[1800px] px-4 lg:px-16  w-full m-auto my-8 md:my-20">
      <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-editorial mb-4">
        Shop by Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="col-span-1 border h-[450px]  rounded-[10px] relative overflow-hidden">
          <Image
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            src="/images/grid-1.png"
            alt="grid-1"
            fill
            className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>

        <div className="col-span-1 md:col-span-2 border h-[450px]  rounded-[10px] relative overflow-hidden">
          <Image
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            src="/images/grid-2.png"
            alt="grid-2"
            fill
            className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>

        <div className="col-span-1 md:col-span-2 border h-[450px]  rounded-[10px] relative overflow-hidden">
          <Image
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            src="/images/grid-3.png"
            alt="grid-3"
            fill
            className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>

        <div className="col-span-1 border h-[450px]  rounded-[10px] relative overflow-hidden">
          <Image
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            src="/images/grid-4.png"
            alt="grid-4"
            fill
            className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}
