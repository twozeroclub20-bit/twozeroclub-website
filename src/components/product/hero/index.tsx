"use client";
import React, { useEffect } from "react";
import { useProductStore } from "@/store/product.store";
import ImageCarousel from "./imageCarousel";
import Intro from "./intro";
import { ProductProvider } from "@/provider/product.provider";
import Loading from "./loading";
import NotFound from "./not-found";
export default function Hero() {
  const { product, isFetching, isError, isLoading } = useProductStore();
  useEffect(() => {
    if (isFetching || isLoading) {
    } else if (!product || isError) {
      document.title = "Product Not Found - Two Zero Club";
    } else {
      document.title = `${product.title} - Two Zero Club`;
    }
  }, [product, isFetching, isLoading, isError]);

  if (isFetching || isLoading) return <Loading />;

  if (!product || isError) return <NotFound />;

  return (
    <ProductProvider>
      <section className="relative max-w-[1800px] min-h-[500px] px-4 lg:px-16 w-full m-auto my-10 flex justify-between gap-2 md:gap-10 flex-col sm:flex-row">
        <ImageCarousel data={product}></ImageCarousel>
        <Intro data={product}></Intro>
      </section>
    </ProductProvider>
  );
}
