"use server";
import { shopifyFetch } from "@/lib/store-front";
import { cookies } from "next/headers";
import { Cart, ShopifyCartOperation } from "@/lib/shopify/types";
import { createCart } from "@/lib/shopify/util";
import { getCartQuery } from "@/lib/shopify/queries/cart";
import { reshapeCart } from "@/lib/shopify/util";

export async function getCart(): Promise<Cart | undefined> {
  let cartId = (await cookies()).get("cartId")?.value;

  if (!cartId) {
    const cart = await createCart();
    (await cookies()).set({
      name: "cartId",
      value: cart.id as string,
    });
    cartId = cart.id as string;
  }

  const res = await shopifyFetch<ShopifyCartOperation>({
    query: getCartQuery,
    variables: { cartId },
  });

  // Old carts becomes `null` when you checkout.
  if (!res.body.data.cart) {
    return undefined;
  }

  return reshapeCart(res.body.data.cart);
}
