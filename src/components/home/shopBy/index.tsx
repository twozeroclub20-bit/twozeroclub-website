import React from "react";
import ShopByCard from "./card";
import StaticData from "@/assets/static/home.static.json";
export default function ShopBy() {
  return (
    <section className="max-w-[1800px] px-4 lg:px-16  w-full m-auto my-8 md:my-20">
      <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-[editorial] mb-5">
        Shop by
      </h2>
      <div className="flex gap-2 items-start flex-wrap">
        {StaticData.shopBy.map((ele, id) => (
          <ShopByCard key={id} id={id} filter={ele} />
        ))}
        {StaticData.shopBy.map((ele, id) => (
          <ShopByCard id={id} key={id + 21} filter={ele} />
        ))}
      </div>
    </section>
  );
}
