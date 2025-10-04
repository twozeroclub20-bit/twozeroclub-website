"use client";

import Card from "./card";
import { useSearchStore } from "@/store/search.store";
import Loading from "./loading";
import { useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function Grid() {
  const {
    isLoading,
    isFetching,
    products,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useSearchStore();

  const sentinelRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        });
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0.1,
      }
    );

    const current = sentinelRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    if (!products || products.length === 0) return;

    const lastPageCursor = products[products.length - 1]?.cursor;
    if (lastPageCursor) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set("p", lastPageCursor);
      router.replace(`?${newParams.toString()}`);
    }
  }, [products, router, searchParams]);

  if (isLoading || !products)
    return (
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {Array.from([1, 2, 3])?.map((product) => (
          <Loading key={product} />
        ))}
      </div>
    );

  return (
    <>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
          {products.map((product) => (
            <Card key={product.id} {...product} />
          ))}
          {isFetching && products && (
            <>
              {Array.from([1, 2, 3])?.map((product) => (
                <Loading key={product} />
              ))}
            </>
          )}
          {hasNextPage && <div ref={sentinelRef} className="h-1" />}
        </div>
      ) : (
        <div className="col-span-full text-center text-gray-foreground">
          No products found.
        </div>
      )}
    </>
  );
}
