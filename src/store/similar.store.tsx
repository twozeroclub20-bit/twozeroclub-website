"use client";

import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getRecommendedProducts } from "@/actions/products/similar.action.";
import { Product } from "@/lib/shopify/types";

interface SimilarStoreInterface {
  isFetching: boolean;
  isError: boolean;
  isLoading: boolean;
  products: any[] | undefined;
  error: Error | null;
}

const SimilarStoreContext = createContext<SimilarStoreInterface | null>(null);

export const SimilarStore = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  const {
    isFetching,
    isError,
    isLoading,
    data: products,
    error,
  } = useQuery<any | undefined>({
    queryKey: ["product-similar", id],
    queryFn: async () => {
      const res = await getRecommendedProducts(id?.toString() || "");
      return res;
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return (
    <SimilarStoreContext.Provider
      value={{ isLoading, isError, isFetching, products, error }}
    >
      {children}
    </SimilarStoreContext.Provider>
  );
};

export const useSimilarStore = () => {
  const ctx = useContext(SimilarStoreContext);
  if (!ctx) throw new Error("useSimilarStore must be used inside SimilarStore");
  return ctx;
};
