import React from "react";
import StaticData from "@/assets/static/menu.static.json";

import { useRouter } from "next/navigation";
export default function Colors({
  onClick,
}: {
  onClick: (val: boolean) => void;
}) {
  const router = useRouter();
  const handleClick = (label: string) => {
    router.push(`/search?q=${label}`);
    onClick(false);
  };
  return (
    <div className=" w-full    border-b-1 pb-4 lg:pb-0  lg:border-b-transparent   border-black/50">
      <h2 className="text-[1.4rem] font-area font-bold mb-5">Shop by Color</h2>
      <h2 className="text-[14px] font-bold text-[#064BD6] font-area mb-2">
        CLASSICS
      </h2>
      <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-16 lg:grid-cols-7 xl:grid-cols-8  gap-1 mb-4 place-items-start justify-center  cursor-pointer">
        {StaticData.classic.map((color, index) => (
          <div
            onClick={() => handleClick(color.label)}
            key={color + "classic" + index}
            className="py-[14px] w-full rounded-[1.5rem] col-span-1"
            style={{ backgroundColor: color.color }}
          ></div>
        ))}
      </div>
      <h2 className="text-[14px] font-bold text-[#FF004F] font-area mb-2">
        TRENDING
      </h2>
      <div className="grid grid-cols-8 sm:grid-cols-12 lg:grid-cols-7 xl:grid-cols-8  gap-1 mb-4 cursor-pointer place-items-start justify-center">
        {StaticData.trending.map((color, index) => (
          <div
            onClick={() => handleClick(color.label)}
            key={color + "trending" + index}
            className="py-[14px] w-full rounded-[1.5rem] col-span-1"
            style={{ backgroundColor: color.color }}
          ></div>
        ))}
      </div>
    </div>
  );
}
