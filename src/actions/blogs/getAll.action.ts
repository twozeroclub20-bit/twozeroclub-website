"use server";
import { shopifyFetch } from "@/lib/store-front";
import { ShopifyGetBlogsWithArticlesOperation } from "@/lib/shopify/types";
import { getBlogsQuery } from "@/lib/shopify/queries/blogs";
import { removeEdgesAndNodes, reshapeArticles } from "@/lib/shopify/util";

export const getBlogs = async () => {
  const res = await shopifyFetch<ShopifyGetBlogsWithArticlesOperation>({
    query: getBlogsQuery,
    variables: {
      first: 250,
    },
  });

  const connection = res.body.data.blogs;

  return reshapeArticles(removeEdgesAndNodes(connection));
};
