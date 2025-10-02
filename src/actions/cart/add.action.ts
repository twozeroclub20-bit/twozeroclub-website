"use server";
import { shopifyFetch } from "@/lib/store-front";
import { cookies } from "next/headers";
import { Cart, ShopifyAddToCartOperation } from "@/lib/shopify/types";
import { addToCartMutation } from "@/lib/shopify/mutations/cart";
import { reshapeCart } from "@/lib/shopify/util";
import { createCart } from "@/lib/shopify/util";

export async function addToCart(
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  let cartId = (await cookies()).get("cartId")?.value;

  if (!cartId) {
    const cart = await createCart();
    cartId = cart.id as string;
    (await cookies()).set({
      name: "cartId",
      value: cartId as string,
    });
  }
  const res = await shopifyFetch<ShopifyAddToCartOperation>({
    query: addToCartMutation,
    variables: {
      cartId: cartId as string,
      lines,
    },
  });
  return reshapeCart(res.body.data.cartLinesAdd.cart);
}
