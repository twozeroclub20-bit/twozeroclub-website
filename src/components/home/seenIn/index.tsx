import React from "react";
import SeenInCard from "./card";
import StaticData from "@/assets/static/home.static.json";
export default function SeenIn() {
  return (
    <section className="max-w-[1800px] px-4 md:px-16  w-full m-auto my-20">
      <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-[editorial] mb-5">
        As Seen In
      </h2>

      <div className=" m-auto hidden lg:flex gap-10 xl:gap-15 items-center justify-between">
        {StaticData.seenIn.map((ele, id) => (
          <SeenInCard key={id} {...ele} />
        ))}
      </div>

      <div className="lg:hidden overflow-hidden relative">
        <div className="flex items-center animate-marquee w-max !gap-10">
          {StaticData.seenIn.concat(StaticData.seenIn).map((ele, id) => (
            <div className="flex-shrink-0" key={id}>
              <SeenInCard {...ele} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
