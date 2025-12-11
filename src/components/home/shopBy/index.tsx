import React from "react";
import ShopByCard from "./card";
import StaticData from "@/assets/static/home.static.json";
export default function ShopBy() {
  return (
    <section className="max-w-[1800px] px-4 lg:px-16  w-full m-auto my-8 md:my-20 space-y-[1.5rem]">
      <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-editorial">
        Shop by
      </h2>
      <div className="flex gap-2 items-start flex-wrap">
        {StaticData.shopByV2.map((ele, id) => (
          <ShopByCard key={id} id={id} filter={ele} />
        ))}
      </div>
    </section>
  );
}
