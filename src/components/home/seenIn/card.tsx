"use client";
import React from "react";
import Image from "next/image";
interface IPROPS {
  thumbnail: string;
  id: number;
}

export default function SeenInCard(data: IPROPS) {
  return (
    <Image
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      src={data.thumbnail}
      alt={data.id.toString()}
      height="500"
      width="500"
      className="h-auto aspect-[3/4] w-[160px]"
    />
  );
}
