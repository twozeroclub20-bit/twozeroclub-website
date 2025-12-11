"use client";
import { ShopifyArticle } from "@/lib/shopify/types";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const colors = ["#F33C14", "#064BD6", "#FFC107", "#08814E"];

type ArticleCardProps = {
  article: ShopifyArticle & { idx: number };
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const { image, title, idx, excerpt, handle, blogHandle } = article;
  const { push } = useRouter();
  return (
    <Link
      className="w-full space-y-[20px]"
      href={`/blogs/${blogHandle}/${handle}`}
    >
      {image && (
        <Image
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          src={image.url}
          alt={image.altText || article.title}
          height={image.height}
          width={image.width}
          className="w-full aspect-[3/4] rounded-2xl pointer-events-none object-cover "
        />
      )}

      <div className="space-y-[5px]">
        <h2 className="text-[1.5rem] line-clamp-1 font-area font-bold font-area">
          {title}
        </h2>
        <p
          className=" font-area leading-[120%]  line-clamp-2 w-[90%]"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </div>

      <Button
        style={{ backgroundColor: colors[idx % colors.length] }}
        onClick={() => push(`/blogs/${blogHandle}/${handle}`)}
        className=" rounded-3xl px-[20px]! py-[10px]! h-auto! w-auto!"
      >
        <span className="font-area -translate-y-[1.5px]">Read More</span>
      </Button>
    </Link>
  );
}
