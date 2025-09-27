"use client";

import React from "react";
import { useParams } from "next/navigation";

export default function Breadcrumb() {
  const { collection, sub } = useParams();

  const decodedCollection = collection
    ? decodeURIComponent(collection.toString())
    : "";
  const decodedSub = sub ? decodeURIComponent(sub.toString()) : "";

  return (
    <h4 className="font-[area] text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] font-bold">
      Home • {decodedCollection} • {decodedSub}
    </h4>
  );
}
