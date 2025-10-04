"use server";
import { shopifyFetch } from "@/lib/store-front";
import { ShopifyCollectionProductsOperation } from "@/lib/shopify/types";
import { getCollectionProductsQuery } from "@/lib/shopify/queries/collection";
import { reshapeProducts, removeEdgesAndNodes } from "@/lib/shopify/util";

export const getCollectionProducts = async ({
  handle,
  reverse = true,
  sortKey = "CREATED",
  first = 10,
  after,
}: {
  handle: string;
  reverse?: boolean;
  sortKey?: string;
  first?: number;
  after?: string;
}) => {
  const res = await shopifyFetch<ShopifyCollectionProductsOperation>({
    query: getCollectionProductsQuery,
    variables: {
      handle,
      reverse,
      first,
      after,
      sortKey: sortKey === "CREATED_AT" ? "CREATED" : sortKey,
    },
  });

  if (!res.body.data.collection) {
    console.warn(`No collection found for \`${handle}\``);
    return { products: [], pageInfo: { hasNextPage: false, endCursor: null } };
  }

  const connection = res.body.data.collection.products;

  return {
    products: reshapeProducts(removeEdgesAndNodes(connection)),
    pageInfo: connection.pageInfo,
  };
};
