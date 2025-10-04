"use server";
import { getProductRecommendationsQuery } from "@/lib/shopify/queries/product";
import { shopifyFetch } from "@/lib/store-front";
import {
  ShopifyProductRecommendationsOperation
} from "@/lib/shopify/types";

import { reshapeProducts } from "@/lib/shopify/util";

export async function getRecommendedProducts(productId: string) {
  const res = await shopifyFetch<ShopifyProductRecommendationsOperation>({
    query: getProductRecommendationsQuery,
    variables: {
      productId,
    },
  });
  const data = reshapeProducts(res.body.data.productRecommendations);
  return data;
}
