"use server";

import { shopifyFetch } from "@/lib/store-front";
import { cookies } from "next/headers";
import { Cart, ShopifyRemoveFromCartOperation } from "@/lib/shopify/types";
import { removeFromCartMutation } from "@/lib/shopify/mutations/cart";
import { reshapeCart } from "@/lib/shopify/util";

export async function removeFromCart(lineIds: string[]): Promise<Cart> {
  const cartId = (await cookies()).get("cartId")?.value!;
  const res = await shopifyFetch<ShopifyRemoveFromCartOperation>({
    query: removeFromCartMutation,
    variables: {
      cartId,
      lineIds,
    },
  });

  return reshapeCart(res.body.data.cartLinesRemove.cart);
}

