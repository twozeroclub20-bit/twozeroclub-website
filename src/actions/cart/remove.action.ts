"use server";

import { shopifyFetch } from "@/lib/store-front";
import { cookies } from "next/headers";
import { Cart, ShopifyRemoveFromCartOperation } from "@/lib/shopify/types";
import { removeFromCartMutation } from "@/lib/shopify/mutations/cart";
import { reshapeCart } from "@/lib/shopify/util";
import { getCart } from "./get.action";

export async function removeFromCart(lineIds: string[]): Promise<Cart> {
  const cart = await getCart();
  if (!cart) throw new Error("Cart not found");
  const res = await shopifyFetch<ShopifyRemoveFromCartOperation>({
    query: removeFromCartMutation,
    variables: {
      cartId: cart.id as string,
      lineIds,
    },
  });

  return reshapeCart(res.body.data.cartLinesRemove.cart);
}
