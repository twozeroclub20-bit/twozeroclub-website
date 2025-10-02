"use client";
import React from "react";
import Card from "./card";
import CardCarousel from "./carousel";
import Loading from "./loading";
import { useCollectionStore } from "@/store/collection.store";
export default function Collection() {
  const { products, isFetching, isError, isLoading } = useCollectionStore();
  if (isFetching || isLoading || !products) {
    return (
      <section className="max-w-[1800px] px-4 md:px-16  w-full m-auto my-20">
        <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-[editorial] mb-5">
          {"Shop the full collection"}
        </h2>
        <div className="hidden sm:grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
          {Array.from([1, 2, 3])?.map((product) => (
            <Loading key={product} />
          ))}
        </div>
        <div
          className="block sm:hidden
     "
        >
          <CardCarousel></CardCarousel>
        </div>
      </section>
    );
  }
  return (
    <section className="max-w-[1800px] px-4 md:px-16  w-full m-auto my-20">
      <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-[editorial] mb-5">
        {"Shop the full collection"}
      </h2>
      <div className="hidden sm:grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {products.slice(0, 5).map((ele) => {
          return <Card {...ele} key={ele.id.toString()} />;
        })}
      </div>

      <div
        className="block sm:hidden
     "
      >
        <CardCarousel></CardCarousel>
      </div>
    </section>
  );
}
