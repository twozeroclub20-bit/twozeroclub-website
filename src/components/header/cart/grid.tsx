import React from "react";
import { Cart } from "@/lib/shopify/types";
import Card from "./card";
export default function CartGrid(data: Cart) {
  return (
    <div className="flex flex-col w-full gap-5 flex-1 mb-5 overflow-y-auto no-scrollbar">
      {data.lines.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
