"use client";
import React from "react";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { useRouter } from "next/navigation";

const colors = ["#F33C14", "#064BD6", "#FFC107", "#08814E"];

export default function TrendingCard(data: any) {
  const { id, thumbnail, title, description, images, idx, handle } = data;
  const { push } = useRouter();
  return (
    <div className="flex flex-col gap-2 w-full ">
      <div className="group relative w-full pb-[150%] overflow-hidden rounded-lg mb-5 sm:mb-[1.625rem]  ">
        <Image
          src={images?.[0]?.url || thumbnail || "/images/card.png"}
          alt={title || "card"}
          fill
          className="object-cover transition-opacity duration-1000 ease-in-out "
        />
      </div>

      <h2 className="font-area text-[1.25rem] sm:text-[1.5rem] line-clamp-1 font-bold">
        {title}
      </h2>
      <p className="font-area text-[0.8rem] sm:text-[1.125rem] font-light line-clamp-2">
        {description}
      </p>
      <Button
        onClick={() =>
          push(`/product/${handle}?id=${id}&collection=footer-trending`)
        }
        style={{ backgroundColor: colors[idx % colors.length] }}
        className="mt-[1.25rem] p-[18px]! md:p-[24px]! w-fit rounded-full text-[0.8rem] text-white font-area"
      >
        Explore More
      </Button>
    </div>
  );
}
