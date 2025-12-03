"use client";
import { ShopifyArticle } from "@/lib/shopify/types";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
type ArticleCardProps = {
  article: ShopifyArticle;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const { image, title, excerpt, id, handle } = article;
  const { push } = useRouter();
  return (
    <Link className="w-full" href={`/blogs/id?id=${id}`}>
      {image && (
        <Image
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          src={image.url}
          alt={image.altText || article.title}
          height={image.height}
          width={image.width}
          className="w-full pointer-events-none object-cover "
        />
      )}

      <div className="py-2 mt-2">
        <h2 className="text-lg font-area font-semibold  mb-2">{title}</h2>

        <p
          className="text-muted-foreground text-sm mb-4 font-area! line-clamp-3"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />

        <Button
          onClick={() => push(`/blogs/id?id=${id}`)}
          className="!font-area rounded-3xl p-5!"
        >
          Read More
        </Button>
      </div>
    </Link>
  );
}
