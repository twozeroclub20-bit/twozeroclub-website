"use client";

import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getBlogs } from "@/actions/blogs/getAll.action";
import { ShopifyArticle } from "@/lib/shopify/types";

interface BlogsStoreInterface {
  isFetching: boolean;
  isError: boolean;
  isLoading: boolean;
  articles: ShopifyArticle[] | undefined;
  error: Error | null;
}

const BlogsStoreContext = createContext<BlogsStoreInterface | null>(null);

export const BlogsStore = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const pageCursor = searchParams.get("p") || undefined;

  const { data, isFetching, isError, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    // @ts-ignore
    queryFn: async ({ pageParam }) => {
      const res = await getBlogs();
      return res;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return (
    <BlogsStoreContext.Provider
      value={{
        isLoading,
        isError,
        isFetching,
        articles: data,
        error: error as Error | null,
      }}
    >
      {children}
    </BlogsStoreContext.Provider>
  );
};

export const useBlogsStore = () => {
  const ctx = useContext(BlogsStoreContext);
  if (!ctx) throw new Error("useBlogsStore must be used inside BlogsStore");
  return ctx;
};
