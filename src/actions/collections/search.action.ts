"use server";
import { shopifyFetch } from "@/lib/store-front";
import { ShopifyProductsByTagOperation } from "@/lib/shopify/types";
import { getProductsByTag } from "@/lib/shopify/queries/collection";
import { reshapeProducts, removeEdgesAndNodes } from "@/lib/shopify/util";

export const getTagProducts = async ({
  tag,
  reverse = true,
  sortKey = "CREATED_AT",
  first = 10,
  after,
}: {
  tag: string;
  reverse?: boolean;
  sortKey?: string;
  first?: number;
  after?: string;
}) => {
  const res = await shopifyFetch<ShopifyProductsByTagOperation>({
    query: getProductsByTag,
    variables: {
      tag,
      first,
      after,
      reverse,
      sortKey,
    },
  });

  if (!res.body.data.products) {
    console.warn(`No collection found for \`${tag}\``);
    return { products: [], pageInfo: { hasNextPage: false, endCursor: null } };
  }

  const connection = res.body.data.products;

  return {
    products: reshapeProducts(removeEdgesAndNodes(connection)),
    pageInfo: connection.pageInfo,
  };
};
