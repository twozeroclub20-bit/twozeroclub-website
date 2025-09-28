"use client";

import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getCollectionProducts } from "@/actions/collections/get.action";

interface CollectionStoreInterface {
  isFetching: boolean;
  isError: boolean;
  isLoading: boolean;
  products: any[] | undefined;
  error: Error | null;
}

const CollectionStoreContext = createContext<CollectionStoreInterface | null>(
  null
);

export const CollectionStore = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { collection, sub } = useParams();

  const {
    isFetching,
    isError,
    isLoading,
    data: products,
    error,
  } = useQuery<any[] | undefined>({
    queryKey: ["collection", collection, sub],
    queryFn: async () => {
      if (!collection || !sub) return;
      const decodedCollection = collection
        ? decodeURIComponent(collection.toString())
        : "";
      const decodedSub = sub ? decodeURIComponent(sub.toString()) : "";

      const query = `${decodedSub
        .split(" ")
        .join("-")
        .toLowerCase()}-${decodedCollection
        .split(" ")
        .join("-")
        .toLowerCase()}`;

      const res = await getCollectionProducts({
        collection: "Test", //query,
      });

      return res;
    },
    enabled: !!sub && !!collection,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return (
    <CollectionStoreContext.Provider
      value={{ isLoading, isError, isFetching, products, error }}
    >
      {children}
    </CollectionStoreContext.Provider>
  );
};

export const useCollectionStore = () => {
  const ctx = useContext(CollectionStoreContext);
  if (!ctx)
    throw new Error("useCollectionStore must be used inside CollectionStore");
  return ctx;
};
