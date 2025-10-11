import { ShopifyArticle } from "@/lib/shopify/types";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
type ArticleCardProps = {
  article: ShopifyArticle;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const { image, title, excerpt, id, handle } = article;
  const { push } = useRouter();
  return (
    <div className="w-full">
      {image && (
        <Image
          src={image.url}
          alt={image.altText || article.title}
          height={image.height}
          width={image.width}
          className="w-full h-64"
        />
      )}

      <div className="py-2">
        <h2 className="text-lg font-[area] font-semibold text-gray-800 mb-2">
          {title}
        </h2>

        <p
          className="text-gray-600 text-sm mb-4 font-[area] line-clamp-3"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />

        <Button
          onClick={() => push(`/blogs/id?id=${id}`)}
          className="!font-[area] !rounded-none"
        >
          Read More
        </Button>
      </div>
    </div>
  );
}
