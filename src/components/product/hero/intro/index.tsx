"use client";
import React from "react";
import Breadcrump from "./breadcrump";
import { Product } from "@/lib/shopify/types";
import Variant from "./variant";
import Price from "./price";
import Cart from "./cart";
import Quantity from "./quantity";
import Checkout from "./checkout";
import { useProduct } from "@/provider/product.provider";
import Description from "./description";
export default function Intro({ data }: { data: Product }) {
  const { variant } = useProduct();

  return (
    <div className="static top-0 md:sticky md:top-[110px] w-full md:w-1/2 xl:w-[23%] self-start">
      <div className="  flex gap-1 flex-col ">
        <Breadcrump></Breadcrump>
        <h1 className="font-[editorial] text-[1.25rem]  sm:text-[1.5rem] lg:text-[1.75rem] tracking-[-2%] leading-[26px] sm:leading-[34px]">
          {data.title}
        </h1>
        <Price data={data}></Price>
        <Variant></Variant>

        {variant ? (
          <>
            {variant.availableForSale ? (
              <>
                <div className="my-2 sm:my-6 flex gap-2 flex-col">
                  <div className="flex gap-2">
                    <Quantity></Quantity>
                    <Cart></Cart>
                  </div>
                  <div>
                    <Checkout></Checkout>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-center text-muted-foreground my-2 sm:my-6">
                  This product is out of stock right now.
                  <br />
                  Please try again later
                </h2>
              </>
            )}
          </>
        ) : (
          <>
            <h2 className="text-center text-muted-foreground my-2 sm:my-6">
              Please select a variant to continue
            </h2>
          </>
        )}

        <Description {...data}></Description>
      </div>
    </div>
  );
}
