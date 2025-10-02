import React from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
export default function Loading() {
  const router = useRouter();
  const { collection, sub } = useParams();

  return (
    <div className="w-full">
      <div className="group relative w-full pb-[150%] overflow-hidden rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse" />
      </div>
      <h2 className="text-[1.5rem] font-[area] mt-10 font-bold text-muted-foreground">
        Product Title
      </h2>
      <p className="text-[1.125rem] font-[area] font-light text-muted-foreground">
        From $00.00
      </p>
    </div>
  );
}
