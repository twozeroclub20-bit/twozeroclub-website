"use client";

import MenuData from "@/assets/static/menu.static.json";
import React, { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { parseSlug, prettifyTagName, toSlug } from "@/util/parse";
function TagItem({
  active,
  tag,
}: {
  active: boolean;
  tag: { ticker: string; label: string };
}) {
  const { collection } = useParams();
  const router = useRouter();

  const parts = parseSlug(collection?.toString() || "");

  const category = toSlug(parts[0]);
  // @ts-ignore
  const categoryList = MenuData.categories[category];
  const productType =
    parts[1] &&
    parts[1].toLowerCase() !== "all" &&
    categoryList &&
    categoryList.includes(toSlug(parts[1]))
      ? toSlug(parts[1])
      : undefined;

  const slug =
    tag.ticker === "all"
      ? [productType, category].filter(Boolean).join("-")
      : [productType, tag.ticker, category].filter(Boolean).join("-");

  return (
    <div
      onClick={() => router.push("/collections/" + slug)}
      className={cn(
        "cursor-pointer select-none relative",
        "inline-flex items-center justify-center",
        "px-2.5 py-1 rounded-full border transition-all leading-none ",
        active ? "border-black" : "border-transparent"
      )}
    >
     

      <span className="capitalize  -translate-y-[0.6px]  inline-flex items-center font-area text-[0.8rem] xl:text-[1.125rem]">
        {tag.label}
      </span>
    </div>
  );
}
export default function Tags() {
  const { collection } = useParams();

  const parts = parseSlug(collection?.toString() || "");

  const category = toSlug(parts[0]);

  const tagList = [
    ...(MenuData.featured || []),
    // @ts-ignore
    ...(MenuData.shop[category] || []),
  ];

  const isTagSelected = (ticker: string) =>
    collection?.includes(ticker) || false;
  const showTags = useMemo(() => {
    return ["home-living", "tech-accessories", "wall-decor"].includes(
      toSlug(category)
    );
  }, [parts]);

  if (!showTags)
    return (
      <>
        <div className="my-2 sm:my-5">
          <h2 className="text-[1.5rem] sm:text-[2.75rem] font-editorial capitalize">
            {parts.at(-1)?.toLowerCase() === "all" ? (
              <>{prettifyTagName(parts.at(-2) || "")}</>
            ) : (
              <>{prettifyTagName(parts.at(-1) || "")}</>
            )}
          </h2>
        </div>
      </>
    );
  return (
    <div className="my-2 sm:my-5">
      <h2 className="text-[1.5rem] sm:text-[2.75rem] font-editorial capitalize">
        {parts.at(-1)?.toLowerCase() === "all" ? (
          <>{prettifyTagName(parts.at(-2) || "")}</>
        ) : (
          <>{prettifyTagName(parts.at(-1) || "")}</>
        )}
      </h2>

      <div className="flex flex-wrap gap-2 mt-4">
        <TagItem
          active={parts.at(-1)?.toLowerCase() === "all"}
          tag={{ ticker: "all", label: "All" }}
        />

        {tagList.map((tag) => (
          <TagItem
            key={tag.ticker}
            tag={tag}
            active={isTagSelected(tag.ticker)}
          />
        ))}
      </div>
    </div>
  );
}
