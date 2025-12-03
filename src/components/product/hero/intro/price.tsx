import { Product } from "@/lib/shopify/types";
import React from "react";
import { useProduct } from "@/provider/product.provider";
export default function Price({ data }: { data: Product }) {
  const { variant } = useProduct();
  return (
    <div className="text-[1rem] font-light  md:text-[1.25rem] flex items-center gap-2 font-area">
      <span className="">
        $
        {variant
          ? variant.price.amount
          : data.priceRange.minVariantPrice.amount}
      </span>
    </div>
  );
}
