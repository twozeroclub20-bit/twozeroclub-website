"use server";
import { getFullCollectionProductsQuery } from "@/lib/shopify/queries/collection";
import { shopifyFetch } from "@/lib/store-front";
import { ShopifyFullCollectionProductsOperation } from "@/lib/shopify/types";

import { reshapeProducts, removeEdgesAndNodes } from "@/lib/shopify/util";

export async function getFullCollectionProducts(handle: string) {
  const res = await shopifyFetch<ShopifyFullCollectionProductsOperation>({
    query: getFullCollectionProductsQuery,
    variables: {
      handle,
    },
  });
  const data = reshapeProducts(
    removeEdgesAndNodes(res.body.data?.collection?.products)
  );
  return data;
}
