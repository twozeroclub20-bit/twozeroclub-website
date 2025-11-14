"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function Breadcrumb() {
  const { collection, sub } = useParams();
  const router = useRouter();
  const decodedCollection = collection
    ? decodeURIComponent(collection.toString())
    : "";
  const decodedSub = sub ? decodeURIComponent(sub.toString()) : "";

  useEffect(() => {
    if (decodedCollection === "footer") {
      document.title = `${decodedSub}`;
    } else {
      document.title = `${decodedCollection} • ${decodedSub}`;
    }
  }, [decodedCollection, decodedSub]);

  return (
    <h4 className="font-[area] text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] font-bold flex gap-2 cursor-pointer">
      <span onClick={() => router.push("/")}>Home</span>
      <span
        onClick={() => router.push(`/${decodedCollection}/all`)}
        className={`capitalize ${
          decodedCollection.toLowerCase() === "footer" ? "hidden" : "block"
        }`}
      >
        • {decodedCollection}
      </span>
      <span
        className={`capitalize ${
          decodedSub.toLowerCase() === "all" ? "hidden" : "block"
        }`}
      >
        • {decodedSub}
      </span>
    </h4>
  );
}
