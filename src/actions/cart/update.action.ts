"use server";

import { shopifyFetch } from "@/lib/store-front";
import { cookies } from "next/headers";
import { Cart, ShopifyUpdateCartOperation } from "@/lib/shopify/types";
import { editCartItemsMutation } from "@/lib/shopify/mutations/cart";
import { reshapeCart } from "@/lib/shopify/util";

export async function updateCart(
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const cartId = (await cookies()).get("cartId")?.value!;
  const res = await shopifyFetch<ShopifyUpdateCartOperation>({
    query: editCartItemsMutation,
    variables: {
      cartId,
      lines,
    },
  });

  return reshapeCart(res.body.data.cartLinesUpdate.cart);
}
