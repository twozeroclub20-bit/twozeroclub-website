import React from "react";
import StaticData from "@/assets/static/home.static.json";
import CollectionCard from "../common/card";

export default function Grid() {
  return (
    <section className="w-full px-2 sm:px-10 lg:px-20 py-[2.5rem] lg:py-[5.25rem] bg-green">
      <div className="max-w-[1775px]  m-auto grid grid-cols-1 md:grid-cols-2  gap-[25px]  ">
        {StaticData.grid.map((ele, idx) => (
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
