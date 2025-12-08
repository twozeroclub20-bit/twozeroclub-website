import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
export default function ProductCard({
  handle,
  images,
  title,
  price,
  thumbnail,
  id,
}: any) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  return (
    <Link className="w-full cursor-pointer" href={`/products/${handle}`}>
      <div className="group relative w-full pb-[150%] overflow-hidden rounded-lg mb-5 sm:mb-[1.625rem]  ">
        <Image
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          src={images?.[0]?.url || thumbnail || "/images/card.png"}
          alt={title || "card"}
          fill
          className="object-cover pointer-events-none transition-opacity duration-1000 ease-in-out group-hover:opacity-0"
        />

        {images?.[1] && (
          <Image
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            src={images[1].url}
            alt={title || "card"}
            fill
            className="object-cover pointer-events-none opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"
          />
        )}
      </div>

      <h2 className="text-[1rem] sm:text-[1.5rem] font-area  font-bold line-clamp-2">
        {title}
      </h2>
      <p className="text-[14px] sm:text-[1.125rem] font-area font-light mt-1">
        From ${price}
      </p>
    </Link>
  );
}
