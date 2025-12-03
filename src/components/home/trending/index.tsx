"use client";

import React from "react";
import StaticData from "@/assets/static/home.static.json";
import TrendingCard from "./card";
import CardCarousel from "./carousel";
import { useTrendingStore } from "@/store/trending.store";
export default function Trending() {
  const { products } = useTrendingStore();
  return (
    <section className="max-w-[1800px] px-4 lg:px-16  w-full m-auto my-8 md:my-20">
      <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-editorial mb-4">
        {"What's Trending"}
      </h2>
      <div
        className="hidden sm:grid 
      sm:grid-cols-2
       xl:grid-cols-4 place-items-start gap-4 "
      >
        {products?.map((ele, idx) => {
          return <TrendingCard idx={idx} {...ele} key={ele.id.toString()} />;
        })}
      </div>

      <div
        className="block sm:hidden
     "
      >
        <CardCarousel data={products ?? []}></CardCarousel>
      </div>
    </section>
  );
}
