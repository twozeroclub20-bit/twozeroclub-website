import React from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";

export default function Card(data: any) {
  const { handle, images, title, price, thumbnail, id, collection } = data;
  const router = useRouter();
  return (
    <div
      className="w-full cursor-pointer"
      onClick={() =>
        router.push(`/product/${handle}?id=${id}&collection=${collection}`)
      }
    >
      <div className="group relative w-full pb-[150%] overflow-hidden rounded-lg">
        <Image
          src={images?.[0].url || thumbnail || "/images/card.png"}
          alt={title || "card"}
          fill
          className="object-cover transition-opacity duration-1000 ease-in-out group-hover:opacity-0"
        />

        {images?.[1] && (
          <Image
            src={images[1].url}
            alt={title || "card"}
            fill
            className="object-cover opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"
          />
        )}
      </div>

      <h2 className="text-[1.5rem] font-[area] mt-10 font-bold">{title}</h2>
      <p className="text-[1.125rem] font-[area] font-light">From ${price}</p>
    </div>
  );
}
