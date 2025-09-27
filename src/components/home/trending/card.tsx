import React from "react";
import { Button } from "@/components/ui/button";

import Image from "next/image";

export interface IPROPS {
  thumbnail: string;
  title: string;
  description: string;
  id: number;
}

const colors = ["#F33C14", "#064BD6", "#FFC107", "#08814E"];

export default function TrendingCard(data: IPROPS) {
  const { id, thumbnail, title, description } = data;
  return (
    <div className="flex flex-col gap-2 w-full ">
      <Image
        src={thumbnail}
        alt={id.toString()}
        width="250"
        height={0}
        className="w-full "
      ></Image>
      <h2 className="font-[area] text-[1.25rem] sm:text-[1.5rem] font-bold">
        {title}
      </h2>
      <p className="font-[area] text-[0.8rem] sm:text-[1.125rem] ">
        {description}
      </p>
      <Button
        style={{ backgroundColor: colors[(id - 1) % colors.length] }}
        className=" w-fit rounded-full p-6 text-white font-[area]"
      >
        Add to basket
      </Button>
    </div>
  );
}
