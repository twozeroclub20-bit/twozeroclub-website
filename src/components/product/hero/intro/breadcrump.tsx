"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Product } from "@/lib/shopify/types";

export default function Breadcrump(data: any) {
  const { collection } = data;

  return (
    <h4 className="font-[area] text-[0.75rem] lg:text-[1rem] font-bold">
      {/* {collection} • {decodedSub} */}
      {collection}
    </h4>
  );
}
