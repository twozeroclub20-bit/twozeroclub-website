import React from "react";
import Image from "next/image";
import { useRouter, useParams, useSearchParams } from "next/navigation";

export default function Card(data: any) {
  const { handle, images, title, price, thumbnail, id } = data;
  const router = useRouter();
  const searchParams = useSearchParams();
  const collection = searchParams.get("collection");
  const sub = searchParams.get("sub");
  return (
    <div
      className="w-full cursor-pointer"
      onClick={() =>
        router.push(
          `/product/${handle}?id=${id}&collection=${collection}&sub=${sub}`
        )
      }
    >
      <div className="group relative w-full pb-[150%] overflow-hidden rounded-lg mb-5 sm:mb-[1.625rem]  ">
        <Image
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          src={images?.[0]?.url || thumbnail || "/images/card.png"}
          alt={title || "card"}
          fill
          className="object-cover transition-opacity duration-1000 ease-in-out group-hover:opacity-0"
        />

        {images?.[1] && (
          <Image
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            src={images[1].url}
            alt={title || "card"}
            fill
            className="object-cover opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"
          />
        )}
      </div>

      <h2 className="text-[1rem] sm:text-[1.5rem] font-area  font-bold line-clamp-2">
        {title}
      </h2>
      <p className="text-[14px] sm:text-[1.125rem] font-area font-light mt-1">
        From ${price}
      </p>
    </div>
  );
}
