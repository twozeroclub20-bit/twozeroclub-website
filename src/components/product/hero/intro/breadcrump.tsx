"use client";

import React from "react";
import { useParams } from "next/navigation";

export default function Breadcrump() {
  const { collection, sub } = useParams();

  const decodedCollection = collection
    ? decodeURIComponent(collection.toString())
    : "";
  const decodedSub = sub ? decodeURIComponent(sub.toString()) : "";

  return (
    <h4 className="font-[area] text-[0.75rem] lg:text-[1rem] font-bold">
      {decodedCollection} • {decodedSub}
    </h4>
  );
}
