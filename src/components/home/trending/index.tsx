import React from "react";
import StaticData from "@/assets/static/home.static.json";
import TrendingCard from "./card";
export default function Trending() {
  return (
    <section className="max-w-[1800px] px-4 w-full m-auto my-20">
      <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-[editorial] mb-5">
        {"What's Trending"}
      </h2>
      <div
        className="grid 
        md:grid-cols-2
       xl:grid-cols-4 place-items-center gap-4 "
      >
        {StaticData.trending.map((ele) => {
          return <TrendingCard {...ele} key={ele.id.toString()} />;
        })}
      </div>
    </section>
  );
}
