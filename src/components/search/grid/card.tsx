import React from "react";
import Image from "next/image";
import { useRouter, useParams, useSearchParams } from "next/navigation";

export default function Card({
  handle,
  images,
  title,
  price,
  thumbnail,
  id,
  collection,
}: any) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  return (
    <div
      className="w-full cursor-pointer"
      onClick={() =>
        router.push(
          `/product/${handle}?id=${id}&collection=Search&sub=${query}`
        )
      }
    >
      <div className="group relative w-full pb-[150%] overflow-hidden rounded-lg mb-5 sm:mb-[1.625rem]  ">
        <Image
          src={images?.[0]?.url || thumbnail || "/images/card.png"}
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

      <h2 className="text-[1rem] sm:text-[1.5rem] font-[area]  font-bold line-clamp-2">
        {title}
      </h2>
      <p className="text-[14px] sm:text-[1.125rem] font-[area] font-light mt-1">
        From ${price}
      </p>
    </div>
  );
}
