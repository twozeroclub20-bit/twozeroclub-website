"use client";
import React from "react";

import { Star } from "lucide-react";
import Image from "next/image";

export interface IPROPS {
  logo: string;
  review: string;
  rating: number;
  id: number;
}

export default function ReviewCard(data: IPROPS) {
  const { id, review, logo, rating } = data;
  return (
    <div className="flex flex-col px-4 md:px-16 items-center lg:flex-row gap-4 sm:gap-6 md:gap-10 lg:gap-2 m-auto w-full xl:w-[1200px]">
      <Image
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        src="/images/review.png"
        alt={id.toString()}
        width="1200"
        height="1650"
        className=""
      ></Image>
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={30}
              fill={i <= rating ? "#FFC107" : "#E5E7EB"}
              color={i <= rating ? "#FFC107" : "#E5E7EB"}
            />
          ))}
        </div>
        <h2 className="font-area text-[1.25rem] sm:text-[1.5rem] text-center">
          {`"${review}"`}
        </h2>
      </div>
    </div>
  );
}
