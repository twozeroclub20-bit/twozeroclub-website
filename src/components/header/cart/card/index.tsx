import React from "react";
import Quantity from "./quantity";
import Image from "next/image";
import { CartItem } from "@/lib/shopify/types";
import { Trash2 } from "lucide-react";
import { useUpdateCart } from "@/hooks/cart.hooks";
export default function Card(data: CartItem) {
  if (!data || !data.merchandise || !data.merchandise.product) return null;
  const { featuredImage, title } = data.merchandise.product;

  const { mutateAsync } = useUpdateCart();

  return (
    <div className=" gap-4 p-2 border-b border-muted-foreground w-full">
      <div className="flex gap-2 items-center ">
        <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center bg-[#f5f5f5] relative">
          <Image
            src={featuredImage.url}
            alt={featuredImage.altText || ""}
            height={featuredImage.height}
            width={featuredImage.width}
            className="w-28 h-28 object-cover"
          ></Image>
          <Trash2
            onClick={() => {
              mutateAsync({
                merchandiseId: data.merchandise.id,
                quantity: 0,
              });
            }}
            className="absolute bottom-3 right-3 hover:stroke-red-500 duration-200 transition-all w-4 h-4"
          ></Trash2>
        </div>
        <div className="flex flex-col flex-1  min-h-32">
          <h2 className="font-[area] text-[0.8rem] line-clamp-4">
            {title}
          </h2>
          <ul>
            {data.merchandise.selectedOptions.map((option) => (
              <li
                key={option.name}
                className="text-[0.7rem] text-muted-foreground"
              >
                {option.name}: {option.value}
              </li>
            ))}
          </ul>

          <Quantity {...data}></Quantity>
        </div>
      </div>
    </div>
  );
}
