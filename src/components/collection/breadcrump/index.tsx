"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";

export default function Breadcrumb() {
  const { collection, sub } = useParams();

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
    <h4 className="font-[area] text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] font-bold flex gap-2">
      Home
      <span
        className={`capitalize ${
          decodedCollection.toLowerCase() === "footer" ? "hidden" : "block"
        }`}
      >
        • {decodedCollection}
      </span>
      <span className="capitalize"> • {decodedSub}</span>
    </h4>
  );
}
