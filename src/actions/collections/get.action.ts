"use server";
import { shopifyFetch } from "@/lib/store-front";
import { ShopifyCollectionProductsOperation } from "@/lib/shopify/types";
import { getCollectionProductsQuery } from "@/lib/shopify/queries/collection";
import { reshapeProducts, removeEdgesAndNodes } from "@/lib/shopify/util";

export const getCollectionProducts = async ({
  reverse = false,
  collection,
  sortKey = "CREATED_AT",
}: {
  reverse?: boolean;
  collection: string;
  sortKey?: string;
}) => {
  const res = await shopifyFetch<ShopifyCollectionProductsOperation>({
    query: getCollectionProductsQuery,
    variables: {
      handle: collection,
      reverse,
      sortKey: sortKey === "CREATED_AT" ? "CREATED" : sortKey,
    },
  });

  if (!res.body.data.collection) {
    console.warn(`No collection found for \`${collection}\``);
    return [];
  }
  return reshapeProducts(
    removeEdgesAndNodes(res.body.data.collection.products)
  );
};
