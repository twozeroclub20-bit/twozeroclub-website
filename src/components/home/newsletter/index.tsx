"use client";

import React from "react";
import StaticData from "@/assets/static/home.static.json";
import ArticleCard from "./card";
import CardCarousel from "./carousel";
import { useBlogsStore } from "@/store/blogs.store";
export default function Newsletter() {
  const { articles, isLoading, isFetching } = useBlogsStore();
  return (
    <section className="max-w-[1800px] px-4 lg:px-16  w-full m-auto my-8 md:my-20">
      <div
        className="hidden sm:grid 
          
            grid-cols-3 place-items-start gap-4 "
      >
        {articles?.map((ele) => {
          return <ArticleCard article={ele} key={ele.id.toString()} />;
        })}
      </div>

      <div
        className="block sm:hidden
          "
      >
        <CardCarousel data={articles}></CardCarousel>
      </div>
    </section>
  );
}
