"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Product } from "@/lib/shopify/types";
export default function Breadcrump({ data }: { data: Product }) {
  const params = useSearchParams();
  console.log(data);

  const collection = params.get("collection");
  const sub = params.get("sub");
  return (
    <h4 className="font-area text-[0.75rem] lg:text-[1rem] font-bold">
      <span className="capitalize">{collection}</span>
      <>
        {sub && sub !== "null" ? (
          <span className="capitalize"> • {sub}</span>
        ) : (
          <span className="capitalize"> • {data.title.split(":")[0]}</span>
        )}
      </>
    </h4>
  );
}
