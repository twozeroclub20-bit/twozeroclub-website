import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center animate-pulse">
      <div className="flex items-center justify-center gap-5 flex-col">
        <Image src="/svg/logo.svg" height={200} width={200} alt="logo"></Image>
        <div className="space-y-4 flex items-center justify-center flex-col">
          <span className="font-area text-2xl font-bold ">Two Zero Club</span>
          <p className="font-area text-sm text-muted-foreground">
            Shop premium printed products and custom merchandise.
          </p>
        </div>
      </div>
    </div>
  );
}
