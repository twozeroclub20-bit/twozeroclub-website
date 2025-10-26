"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Breadcrumb() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  useEffect(() => {
    document.title = q ? `Search • ${q}` : "Search";
  }, [q]);

  return (
    <h4 className="font-[area] text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] font-bold">
      Home • Search • {q}
    </h4>
  );
}
