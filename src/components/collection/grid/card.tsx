import React from "react";
import Image from "next/image";

export default function Card(data: any) {
  return (
    <div className="w-full">
      <div className="relative w-full pb-[150%] overflow-hidden rounded-lg">
        <Image
          src={data.thumbnail || "/images/card.png"}
          alt={data.title || "card"}
          fill
          className="object-cover"
        />
      </div>
      <h2 className="text-[1.5rem] font-[area] mt-5 font-bold">{data.title}</h2>
      <p className="text-[1.125rem] font-[area] font-light">
        From ${data.price}
      </p>
    </div>
  );
}
