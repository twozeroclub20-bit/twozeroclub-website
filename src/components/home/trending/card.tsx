"use client";
import React from "react";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { useRouter } from "next/navigation";

const colors = ["#F33C14", "#064BD6", "#FFC107", "#08814E"];

interface IPROPS {
  image: string;
  collection: string;
  title: string;
  description: string;
  idx: number;
}

export default function TrendingCard(data: IPROPS) {
  const { idx, collection, title, description, image } = data;
  const { push } = useRouter();
  return (
    <div className="flex flex-col space-y-[20px] w-full ">
      {image && (
        <Image
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          src={image}
          alt={"collection"}
          height={400}
          width={600}
          className="w-full aspect-[3/4] rounded-2xl pointer-events-none object-cover "
        />
      )}
      <div className="space-y-[5px]">
        <h2 className="text-[1.5rem] font-area font-bold font-area line-clamp-1">
          {title}
        </h2>
        <p className=" font-area leading-[120%] line-clamp-2 w-[90%]">{description}</p>
      </div>

      <Button
        onClick={() => push(`/collections/${collection}`)}
        style={{ backgroundColor: colors[idx % colors.length] }}
        className="rounded-3xl px-[20px]! py-[10px]! h-auto!  w-fit"
      >
        <span className="font-area -translate-y-[1.5px]">Explore</span>
      </Button>
    </div>
  );
}
