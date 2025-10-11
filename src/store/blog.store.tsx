"use client";

import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { ShopifyArticle } from "@/lib/shopify/types";
import { getArticle } from "@/actions/blogs/get.action";

interface ArticleStoreInterface {
  isFetching: boolean;
  isError: boolean;
  isLoading: boolean;
  article: ShopifyArticle | undefined;
  error: Error | null;
}

const ArticleStoreContext = createContext<ArticleStoreInterface | null>(null);

export const ArticleStore = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const {
    isFetching,
    isError,
    isLoading,
    data: article,
    error,
  } = useQuery<ShopifyArticle | undefined>({
    queryKey: ["article", id],
    queryFn: async () => {
      const res = await getArticle({ id: id?.toString() || "" });
      return res;
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return (
    <ArticleStoreContext.Provider
      value={{ isLoading, isError, isFetching, article, error }}
    >
      {children}
    </ArticleStoreContext.Provider>
  );
};

export const useArticleStore = () => {
  const ctx = useContext(ArticleStoreContext);
  if (!ctx) throw new Error("useArticleStore must be used inside ArticleStore");
  return ctx;
};
