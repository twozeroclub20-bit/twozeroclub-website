"use server";
import { shopifyFetch } from "@/lib/store-front";
import {
  ShopifyArticle,
  ShopifyGetArticleByIdOperation,
} from "@/lib/shopify/types";
import { getArticleByIdQuery } from "@/lib/shopify/queries/blogs";

export const getArticle = async ({ id }: { id: string }) => {
  const res = await shopifyFetch<ShopifyGetArticleByIdOperation>({
    query: getArticleByIdQuery,
    variables: {
      id: id,
    },
  });
  return res.body.data.article as ShopifyArticle;
};
