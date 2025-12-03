"use client";
import React from "react";
import Card from "./card";
import CardCarousel from "./carousel";
import { useSimilarStore } from "@/store/similar.store";
import Loading from "./loading";
export default function Similar() {
  const { products, isFetching, isError, isLoading } = useSimilarStore();
  if (isFetching || isLoading || !products) {
    return (
      <section className="max-w-[1800px] px-4 lg:px-16  w-full m-auto my-5 sm:my-20">
        <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-editorial mb-5">
          {"You might also like this"}
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
      <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-editorial mb-5">
        {"You might also like this"}
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
