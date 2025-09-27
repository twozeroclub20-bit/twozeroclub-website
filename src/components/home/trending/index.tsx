import React from "react";
import StaticData from "@/assets/static/home.static.json";
import TrendingCard from "./card";
import CardCarousel from "./carousel";
export default function Trending() {
  return (
    <section className="max-w-[1800px] px-4 md:px-16  w-full m-auto my-20">
      <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-[editorial] mb-5">
        {"What's Trending"}
      </h2>
      <div
        className="hidden sm:grid 
      sm:grid-cols-2
       xl:grid-cols-4 place-items-start gap-4 "
      >
        {StaticData.trending.map((ele) => {
          return <TrendingCard {...ele} key={ele.id.toString()} />;
        })}
      </div>

      <div
        className="block sm:hidden
     "
      >
        <CardCarousel data={StaticData.trending}></CardCarousel>
      </div>
    </section>
  );
}
