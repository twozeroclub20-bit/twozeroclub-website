"use server";
import { shopifyFetch } from "@/lib/store-front";
import {
  ShopifyArticle,
  ShopifyGetArticleByHandleOperation,
} from "@/lib/shopify/types";
import { getArticleByHandleQuery } from "@/lib/shopify/queries/blogs";

export const getArticle = async ({
  blog,
  article,
}: {
  blog: string;
  article: string;
}) => {
  const res = await shopifyFetch<ShopifyGetArticleByHandleOperation>({
    query: getArticleByHandleQuery,
    variables: {
      blogHandle: blog,
      articleHandle: article,
    },
  });

  return res.body.data.blogByHandle?.articleByHandle as ShopifyArticle;
};
