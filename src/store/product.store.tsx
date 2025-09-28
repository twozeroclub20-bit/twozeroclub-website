"use client";

import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getProduct } from "@/actions/products/get.action";
import { Product } from "@/lib/shopify/types";

interface ProductStoreInterface {
  isFetching: boolean;
  isError: boolean;
  isLoading: boolean;
  product: Product | undefined;
  error: Error | null;
}

const ProductStoreContext = createContext<ProductStoreInterface | null>(null);

export const ProductStore = ({ children }: { children: React.ReactNode }) => {
  const { id } = useParams();

  const {
    isFetching,
    isError,
    isLoading,
    data: product,
    error,
  } = useQuery<Product | undefined>({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await getProduct(id?.toString() || "");
      return res;
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return (
    <ProductStoreContext.Provider
      value={{ isLoading, isError, isFetching, product, error }}
    >
      {children}
    </ProductStoreContext.Provider>
  );
};

export const useProductStore = () => {
  const ctx = useContext(ProductStoreContext);
  if (!ctx) throw new Error("useProductStore must be used inside ProductStore");
  return ctx;
};
