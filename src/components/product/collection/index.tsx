"use client";
import React from "react";
import Card from "./card";
import CardCarousel from "./carousel";
import Loading from "./loading";
import { useFullCollectionStore } from "@/store/full-collection.store";
export default function Collection() {
  const { products, isFetching, isError, isLoading } = useFullCollectionStore();
  if (isFetching || isLoading || !products) {
    return (
      <section className="max-w-[1800px] px-4 lg:px-16  w-full m-auto my-5 sm:my-20">
        <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-[editorial] mb-5">
          {"Shop the full collection"}
        </h2>
        <div className="hidden 2xl:grid 2xl:grid-cols-5 gap-5">
          {Array.from([1, 2, 3])?.map((product) => (
            <Loading key={product} />
          ))}
        </div>
        <div
          className="block 2xl:hidden
     "
        >
          <CardCarousel></CardCarousel>
        </div>
      </section>
    );
  }
  return (
    <section className="max-w-[1800px] px-4 lg:px-16  w-full m-auto my-5 sm:my-20">
      <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-[editorial] mb-5">
        {"Shop the full collection"}
      </h2>

      {products.length > 0 ? (
        <>
          {products && (
            <>
              <div className="hidden 2xl:grid 2xl:grid-cols-5 gap-5">
                {products.slice(0, 5).map((ele) => {
                  return <Card {...ele} key={ele.id.toString()} />;
                })}
              </div>

              <div
                className="block 2xl:hidden
          "
              >
                <CardCarousel></CardCarousel>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="col-span-full text-center text-gray-foreground">
          No products found.
        </div>
      )}
    </section>
  );
}
