"use client";

import React, { useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Product } from "@/lib/shopify/types";
import { parseNameToSlug, parseSlug } from "@/util/parse";

export default function Breadcrump({ data }: { data: Product }) {
  const router = useRouter();
  const { collection } = data;
  const parts = parseSlug(collection);
  const main = parseNameToSlug(parts[0]);
  const sub = parseNameToSlug(parts[1]);
  return (
    <h4 className="font-area text-[0.75rem] lg:text-[1rem] font-bold cursor-pointer">
      <span
        onClick={() => router.push("/collections/" + main)}
        className="capitalize"
      >
        {parts[0]}
      </span>

      <>
        {parts.length > 1 && parts[1].toLowerCase() === "all" ? (
          <></>
        ) : (
          <>
            {parts.slice(1).map((ele) => (
              <>
                <span
                  className="capitalize"
                  onClick={() =>
                    router.push("/collections/" + sub + "-" + main)
                  }
                >
                  {" "}
                  • {ele}
                </span>
              </>
            ))}
          </>
        )}
      </>
    </h4>
  );
}
