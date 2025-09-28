"use server";
import { shopifyFetch } from "@/lib/store-front";
import { ShopifyProductOperation, Product } from "@/lib/shopify/types";
import { getProductQuery } from "@/lib/shopify/queries/product";
import { reshapeProduct } from "@/lib/shopify/util";

export async function getProduct(handle: string): Promise<Product | undefined> {
  const res = await shopifyFetch<ShopifyProductOperation>({
    query: getProductQuery,
    variables: {
      handle,
    },
  });

  return reshapeProduct(res.body.data.product, false);
}
