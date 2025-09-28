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
    <div className="w-full md:w-2/5 flex gap-2 flex-col ">
      <Breadcrump></Breadcrump>
      <h1 className="font-[editorial] text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] leading-8">
        {data.title}
      </h1>
      <Price data={data}></Price>
      <Variant data={data}></Variant>

      {variant ? (
        <>
          {variant.availableForSale ? (
            <>
              <div className="flex gap-2 mt-3">
                <Quantity></Quantity>
                <Cart></Cart>
              </div>
              <div>
                <Checkout></Checkout>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-center text-muted-foreground mt-5">
                This product is out of stock right now.
                <br />
                Please try again later
              </h2>
            </>
          )}
        </>
      ) : (
        <>
          <h2 className="text-center text-muted-foreground mt-5">
            Please select a variant to continue
          </h2>
        </>
      )}

      <Description></Description>
    </div>
  );
}
