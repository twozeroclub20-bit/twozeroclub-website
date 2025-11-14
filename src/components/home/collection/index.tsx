import React from "react";
import StaticData from "@/assets/static/home.static.json";
import CollectionCard from "./card";

export default function Collection() {
  return (
    <section className="w-full px-2 sm:px-10 lg:px-20 py-2 sm:py-20 lg:py-35 bg-green">
      <div className=" max-w-[1200px] m-auto grid grid-cols-1 md:grid-cols-2 gap-2 ">
        {StaticData.collections.map((ele) => (
          <CollectionCard key={ele.id.toString()} {...ele}></CollectionCard>
        ))}
      </div>
    </section>
  );
}
