"use client";

import React, { createContext, useContext } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getTagProducts } from "@/actions/collections/search.action";
interface SearchStoreInterface {
  isFetching: boolean;
  isError: boolean;
  isLoading: boolean;
  products: any[];
  error: Error | null;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

const SearchStoreContext = createContext<SearchStoreInterface | null>(null);

export const SearchStore = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const pageCursor = searchParams.get("p") || undefined;
  const q = searchParams.get("q") as string;
  const {
    data,
    isFetching,
    isError,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["search", pageCursor, q],
    // @ts-ignore
    queryFn: async ({ pageParam }) => {
      const res = await getTagProducts({
        tag: q,
        first: 10,
        after: pageParam || pageCursor,
      });

      return res;
    },

    getNextPageParam: (lastPage) =>
      lastPage?.pageInfo?.hasNextPage ? lastPage.pageInfo.endCursor : undefined,
    initialPageParam: undefined,
    enabled: !!q,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const products = data?.pages.flatMap((page: any) => page.products) ?? [];

  return (
    <SearchStoreContext.Provider
      value={{
        isLoading,
        isError,
        isFetching,
        products,
        error: error as Error | null,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
      }}
    >
      {children}
    </SearchStoreContext.Provider>
  );
};

export const useSearchStore = () => {
  const ctx = useContext(SearchStoreContext);
  if (!ctx) throw new Error("useSearchStore must be used inside SearchStore");
  return ctx;
};
