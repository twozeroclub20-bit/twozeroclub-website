import React from "react";
import StaticData from "@/assets/static/menu.static.json";

export default function ShopByColor({
  click,
}: {
  click: (val: string) => void;
}) {
  return (
    <div className=" ">
      <h2 className="text-[1rem] font-area font-extrabold mb-5">
        Shop by Color
      </h2>
      <h2 className="text-[14px] font-bold text-[#064BD6] font-area mb-2">
        CLASSICS
      </h2>
      <div className="grid grid-cols-7 min-[350px]:grid-cols-8 min-[550px]:grid-cols-10 min-[650px]:grid-cols-14  gap-1 mb-4 place-items-start justify-center  cursor-pointer">
        {StaticData.classic.map((color, index) => (
          <div
            onClick={() => click(color.label)}
            key={color + "classic" + index}
            className="py-[12px] w-full rounded-[1.5rem] col-span-1"
            style={{ backgroundColor: color.color }}
          ></div>
        ))}
      </div>
      <h2 className="text-[14px] font-bold text-[#FF004F] font-area mb-2">
        TRENDING
      </h2>
      <div className="grid grid-cols-7 min-[350px]:grid-cols-8 min-[550px]:grid-cols-10 min-[650px]:grid-cols-14  gap-1 mb-4 cursor-pointer place-items-start justify-center">
        {StaticData.trending.map((color, index) => (
          <div
            onClick={() => click(color.label)}
            key={color + "trending" + index}
            className="py-[12px] w-full rounded-[1.5rem] col-span-1"
            style={{ backgroundColor: color.color }}
          ></div>
        ))}
      </div>
    </div>
  );
}
