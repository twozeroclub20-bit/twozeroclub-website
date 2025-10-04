"use client";
import StaticData from "@/assets/static/menu.static.json";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Tags() {
  const { collection, sub } = useParams();

  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  return (
    <div className="my-5">
      <h2 className="text-[2.75rem] font-[editorial]">Search for {q}</h2>
      <div className="flex space-x-1 sm:space-x-3 flex-wrap">
        <Link
          href={"/" + collection + "/" + sub}
          className={`font-[area] text-[0.8rem] xl:text-[1.125rem] px-3 min-w-14 text-center py-0.5 rounded-full border border-black`}
        >
          All
        </Link>

        {StaticData?.featured?.map((tag, idx) => (
          <Link
            href={"/" + collection + "/" + tag}
            key={`featured-${idx}`}
            className={`font-[area] text-[0.8rem] xl:text-[1.125rem] px-3 min-w-14 text-center py-0.5 rounded-full  `}
          >
            {tag}
          </Link>
        ))}

        {StaticData?.shop?.map((tag, idx) => (
          <Link
            href={"/" + collection + "/" + tag}
            key={`shop-${idx}`}
            className={`font-[area] text-[0.8rem] xl:text-[1.125rem] px-3 min-w-14 text-center py-0.5 rounded-full `}
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
