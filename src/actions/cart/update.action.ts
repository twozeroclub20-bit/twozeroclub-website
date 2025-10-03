"use server";

import { shopifyFetch } from "@/lib/store-front";
import { cookies } from "next/headers";
import { Cart, ShopifyUpdateCartOperation } from "@/lib/shopify/types";
import { editCartItemsMutation } from "@/lib/shopify/mutations/cart";
import { reshapeCart } from "@/lib/shopify/util";
import { getCart } from "./get.action";

export async function updateCart(
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const cart = await getCart();
  if (!cart) throw Error("Cart not found");
  const res = await shopifyFetch<ShopifyUpdateCartOperation>({
    query: editCartItemsMutation,
    variables: {
      cartId: cart.id as string,
      lines,
    },
  });

  return reshapeCart(res.body.data.cartLinesUpdate.cart);
}
