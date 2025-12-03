"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Breadcrumb() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const router = useRouter();
  useEffect(() => {
    document.title = q ? `Search • ${q}` : "Search";
  }, [q]);

  return (
    <h4 className="font-area text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] font-bold flex gap-2 cursor-pointer">
      <span onClick={() => router.push("/")}>Home</span>
      <span>• Search</span>
      <span className="capitalize"> • {q}</span>
    </h4>
  );
}
