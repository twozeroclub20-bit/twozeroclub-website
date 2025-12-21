"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface IPROPS {
  filter: {
    label: string;
    collection: string;
    color: string;
  };
  id: number;
}

export default function ShopByCard(data: IPROPS) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/collections/${data.filter.collection}`);
      }}
      className="
      cursor-pointer
        rounded-full font-area text-white
        flex items-center justify-center   
        leading-none                      
        
        px-3 py-1.5           
        text-sm               

        sm:px-4 sm:py-2       
        sm:text-base          

        md:px-5 md:py-2.5     
        md:text-lg
      "
      style={{ backgroundColor: data.filter.color }}
    >
      <span className="">{data.filter.label}</span>
    </div>
  );
}
