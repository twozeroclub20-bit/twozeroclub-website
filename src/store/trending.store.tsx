"use client";

import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getFullCollectionProducts } from "@/actions/products/collection.action";

interface TrendingStoreInterface {
  isFetching: boolean;
  isError: boolean;
  isLoading: boolean;
  products: any[] | undefined;
  error: Error | null;
}

const TrendingStoreContext = createContext<TrendingStoreInterface | null>(null);

export const TrendingStore = ({ children }: { children: React.ReactNode }) => {
  const {
    isFetching,
    isError,
    isLoading,
    data: products,
    error,
  } = useQuery<any | undefined>({
    queryKey: ["trending"],
    queryFn: async () => {
      const res = await getFullCollectionProducts("trending");
      return res;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return (
    <TrendingStoreContext.Provider
      value={{ isLoading, isError, isFetching, products, error }}
    >
      {children}
    </TrendingStoreContext.Provider>
  );
};

export const useTrendingStore = () => {
  const ctx = useContext(TrendingStoreContext);
  if (!ctx)
    throw new Error("useTrendingStore must be used inside TrendingStore");
  return ctx;
};
