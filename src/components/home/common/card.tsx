"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const colors = ["#F33C14", "#064BD6", "#FFC107", "#08814E"];
interface IPROPS {
  image: string;
  collection: string;
  title: string;
  description: string;
  idx: number;
}

export default function CollectionCard(data: IPROPS) {
  const { collection, image, description, title, idx } = data;
  const { push } = useRouter();
  return (
    <Link
      className="w-full space-y-[20px]!"
      href={`/collections/${collection}`}
    >
      {image && (
        <Image
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          src={image}
          alt={"collection"}
          height={400}
          width={600}
          className="w-full aspect-[4/3] rounded-2xl pointer-events-none object-cover "
        />
      )}

      <div className="space-y-[5px]">
        <h2 className="text-[1.5rem] font-area font-bold font-area">{title}</h2>
        <p className=" font-area leading-[120%]  line-clamp-2 w-[90%]">
          {description}
        </p>
      </div>

      <Button
        onClick={() => push(`/collections/${collection}`)}
        style={{ backgroundColor: colors[idx % colors.length] }}
        className=" rounded-3xl px-[20px]! py-[10px]! h-auto! w-auto!"
      >
        <span className="font-area -translate-y-[1.5px]!">Discover</span>
      </Button>
    </Link>
  );
}
