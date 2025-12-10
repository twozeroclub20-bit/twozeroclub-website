"use client";
import React from "react";

interface IPROPS {
  filter: string;
  id: number;
}

const colors = [
  "#EB9501",
  "#F33C14",
  "#FDB306",
  "#064BD6",
  "#FE7E93",
  "#08814E",
  "#C1D329",
  "#B9B9F5",
  "#FE7E93",
];

export default function ShopByCard(data: IPROPS) {
  return (
    <div
      className="px-[20px] py-2 leading-[150%]! rounded-full font-area text-white "
      style={{ backgroundColor: colors[data.id % 9] }}
    >
      {data.filter}
    </div>
  );
}
