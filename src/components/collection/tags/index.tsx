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
      : `${tag.split(" ").join("-").toLowerCase()}-${parseNameToSlug(c)}`;

  return (
    <div
      onClick={() => router.push("/collections/" + slug)}
      className={cn(
        "font-area cursor-pointer text-[0.8rem] xl:text-[1.125rem] px-[10px] py-[6px]",
        "flex items-center justify-center rounded-full border transition-all duration-200 select-none",

        active ? "border-black " : "border-none"
      )}
    >
      <span className=" capitalize leading-none -translate-y-[0.3px]">
        {tag}
      </span>
    </div>
  );
}

//  <p
//    onClick={() => router.push("/collections/wall-decor")}
//    className="peer font-bold leading-[0.9] px-[10px] transition-all duration-200  py-[6px]! rounded-full font-area text-[0.8rem] xl:text-[1.125rem]  border border-transparent box-border group-hover:border-black"
//  >
//    <span className=" flex items-center font-bold font-area text-[0.8rem] xl:text-[1.125rem] leading-none -translate-y-[0.75px]">
//      Wall Decor
//    </span>
//  </p>;

export default function Tags() {
  const { collection } = useParams();
  const parts = parseSlug(collection?.toString() || "");

  const isTagSelected = (tag: string) =>
    parts[1]?.toLowerCase().trim() === tag.toLowerCase().trim();

  return (
    <div className="my-2 sm:my-5">
      <h2 className="text-[2.75rem] font-editorial capitalize">
        {parts.length === 2 ? parts[1] : parts[0]}
      </h2>
      <div className="flex space-x-1 sm:space-x-3 flex-wrap">
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
