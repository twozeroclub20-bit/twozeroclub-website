"use client";
import React from "react";
import StaticData from "@/assets/static/home.static.json";
import CollectionCard from "../common/card";
export default function Collection() {
  return (
    <section className="max-w-[1775px] px-4 lg:px-16  w-full m-auto my-8 md:my-20 space-y-[1.5rem]">
      <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-editorial">
        Shop by Collection
      </h2>
      <div className="m-auto grid grid-cols-1 md:grid-cols-2 gap-[25px] ">
        {StaticData.collections.map((ele, idx) => (
          <CollectionCard
            idx={idx}
            key={ele.id.toString()}
            {...ele}
          ></CollectionCard>
        ))}
      </div>
    </section>
  );
}
