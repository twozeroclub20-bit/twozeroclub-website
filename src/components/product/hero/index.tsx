"use client";
import React from "react";
import { useProductStore } from "@/store/product.store";
import ImageCarousel from "./imageCarousel";
import Intro from "./intro";
import { ProductProvider } from "@/provider/product.provider";
export default function Hero() {
  const { product, isFetching, isError, isLoading } = useProductStore();
  if (isFetching || isLoading || !product) {
    return (
      <div className="col-span-full text-center text-gray-foreground my-5 ">
        Loading Product Info ...
      </div>
    );
  }
  return (
    <ProductProvider>
      <section className="relative max-w-[1800px] min-h-[500px] px-4 md:px-16 w-full m-auto my-10 flex justify-between gap-2 md:gap-10 flex-col sm:flex-row">
        <ImageCarousel data={product}></ImageCarousel>
        <Intro data={product}></Intro>
      </section>
    </ProductProvider>
  );
}
