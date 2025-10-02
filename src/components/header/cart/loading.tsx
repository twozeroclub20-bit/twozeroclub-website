import React from "react";
import { Loader } from "lucide-react";
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-4">
      <Loader className="w-12 h-12 animate-spin duration-400"></Loader>
      <h2 className="font-[area]">Loading your Cart</h2>
    </div>
  );
}
