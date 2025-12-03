"use client";

import Card from "./card";
import { useBlogsStore } from "@/store/blogs.store";
import Loading from "./loading";
import { useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function Grid() {
  const { isLoading, isFetching, articles } = useBlogsStore();
  const router = useRouter();
  if (isLoading || !articles)
    return (
      <>
        <h4 className="font-area my-5 text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] font-bold flex gap-2 cursor-pointer">
          <span onClick={() => router.push("/")}>Home</span>
          <span>• Blogs</span>
        </h4>

        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5">
          {Array.from([1, 2, 3])?.map((product) => (
            <Loading key={product} />
          ))}
        </div>
      </>
    );

  return (
    <>
      <h4 className="font-area my-5 text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] font-bold flex gap-2 cursor-pointer">
        <span onClick={() => router.push("/")}>Home</span>
        <span>• Blogs</span>
      </h4>
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5">
          {articles.map((content) => (
            <Card key={content.id} article={content} />
          ))}
        </div>
      ) : (
        <div className="col-span-full text-center text-gray-foreground">
          No products found.
        </div>
      )}
    </>
  );
}
