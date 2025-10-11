import React from "react";
import { Button } from "../ui/button";

export default function Loading() {
  return (
    <div className="w-full animate-pulse">
      <div className="w-full h-64 bg-muted"></div>

      <div className="py-2">
        <h2 className="text-lg  font-[area] font-semibold text-muted-foreground mb-2">
          Lorem Ipsum
        </h2>

        <div className="text-sm mb-4 font-[area] text-muted-foreground line-clamp-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          modi non laboriosam autem labore, laudantium suscipit explicabo
          voluptates iure assumenda!
        </div>
        <Button disabled className="!rounded-none cursor-not-allowed">
          Read More
        </Button>
      </div>
    </div>
  );
}
