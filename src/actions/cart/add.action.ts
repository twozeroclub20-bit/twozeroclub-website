"use server";
import { shopifyFetch } from "@/lib/store-front";
import { Cart, ShopifyAddToCartOperation } from "@/lib/shopify/types";
import { addToCartMutation } from "@/lib/shopify/mutations/cart";
import { reshapeCart } from "@/lib/shopify/util";
import { getCart } from "./get.action";

export async function addToCart(
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const cart = await getCart();
  if (!cart) throw new Error("Cart not found");
  let cartId = cart.id;

  const res = await shopifyFetch<ShopifyAddToCartOperation>({
    query: addToCartMutation,
    variables: {
      cartId: cartId as string,
      lines,
    },
  });
  return reshapeCart(res.body.data.cartLinesAdd.cart);
}
