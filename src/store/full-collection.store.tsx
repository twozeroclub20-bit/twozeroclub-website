"use client";

import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getFullCollectionProducts } from "@/actions/products/collection.action";

interface FullCollectionStoreInterface {
  isFetching: boolean;
  isError: boolean;
  isLoading: boolean;
  products: any[] | undefined;
  error: Error | null;
}

const FullCollectionStoreContext =
  createContext<FullCollectionStoreInterface | null>(null);

export const FullCollectionStore = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const searchParams = useSearchParams();

  const collection = searchParams.get("collection") as string;
  const sub = searchParams.get("sub") as string;
  const {
    isFetching,
    isError,
    isLoading,
    data: products,
    error,
  } = useQuery<any | undefined>({
    queryKey: ["product-collection", collection, sub],
    queryFn: async () => {
      const decodedCollection = decodeURIComponent(collection.toString());
      const decodedSub = decodeURIComponent(sub.toString());

      const query = `${decodedSub
        .split(" ")
        .join("-")
        .toLowerCase()}${decodedCollection.split(" ").join("-").toLowerCase()}`;
      const res = await getFullCollectionProducts(query || "");

      return res;
    },
    enabled: !!collection,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return (
    <FullCollectionStoreContext.Provider
      value={{ isLoading, isError, isFetching, products, error }}
    >
      {children}
    </FullCollectionStoreContext.Provider>
  );
};

export const useFullCollectionStore = () => {
  const ctx = useContext(FullCollectionStoreContext);
  if (!ctx)
    throw new Error(
      "useFullCollectionStore must be used inside FullCollectionStore"
    );
  return ctx;
};
