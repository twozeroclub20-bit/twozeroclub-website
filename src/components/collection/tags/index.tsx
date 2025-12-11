"use client";
import StaticData from "@/assets/static/menu.static.json";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { parseNameToSlug, parseSlug } from "@/util/parseSlug";

function TagItem({ active, tag }: { active: boolean; tag: string }) {
  const { collection } = useParams();
  const router = useRouter();

  const [c] = parseSlug(collection?.toString() || "");
  const slug =
    tag === "all"
      ? parseNameToSlug(c)
      : `${tag
          .replace(" & ", " ")
          .split(" ")
          .join("-")
          .toLowerCase()}-${parseNameToSlug(c)}`;

  return (
    <div
      onClick={() => router.push("/collections/" + slug)}
      className={cn(
        "cursor-pointer",
        "px-[10px] py-[4px]",
        "flex items-center justify-center",
        "rounded-full border transition-all duration-200 select-none",
        "leading-none",
        active ? "border-black" : "border-transparent"
      )}
    >
      <span className="capitalize font-area text-[0.8rem] xl:text-[1.125rem]">
        {tag}
      </span>
    </div>
  );
}

export default function Tags() {
  const { collection } = useParams();
  const parts = parseSlug(collection?.toString() || "");

  function prettifyTagName(name: string) {
    const map: Record<string, string> = {
      "plants floral": "Plants & Floral",
      "food drinks": "Food & Drinks",
    };

    const key = name.toLowerCase().trim();
    return map[key] || name;
  }

  const isTagSelected = (tag: string) => {
    console.log(tag.toLowerCase().replace(" & ", " ").replace(" ", "-"));
    return (
      parts[1]?.toLowerCase().replace(" & ", " ").replace(" ", "-").trim() ===
      tag.toLowerCase().replace(" & ", " ").replace(" ", "-")
    );
  };

  return (
    <div className="my-2 sm:my-5">
      <h2 className="text-[1.5rem] sm:text-[2.75rem] font-editorial capitalize">
        {parts.length === 2 ? prettifyTagName(parts[1]) : parts[0]}
      </h2>
      <div className="flex space-x-1 sm:space-x-3 flex-wrap mt-4 sm:mt-2">
        <TagItem active={parts.length === 1} key="all" tag="all"></TagItem>
        {StaticData?.featured?.map((tag, idx) => (
          <TagItem
            active={isTagSelected(tag)}
            key={"feature" + idx}
            tag={tag}
          ></TagItem>
        ))}

        {StaticData?.shop?.map((tag, idx) => (
          <TagItem
            active={isTagSelected(tag)}
            key={"feature-shop" + idx}
            tag={tag}
          ></TagItem>
        ))}
      </div>
    </div>
  );
}
