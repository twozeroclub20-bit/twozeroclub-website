"use server";
import { createCart } from "@/lib/shopify/util";
import { shopifyFetch } from "@/lib/store-front";
import { ShopifyAddToCartOperation } from "@/lib/shopify/types";
import { addToCartMutation } from "@/lib/shopify/mutations/cart";
const buyProduct = async (
  lines: { merchandiseId: string; quantity: number }[]
) => {
  try {
    const cart = await createCart();
    await shopifyFetch<ShopifyAddToCartOperation>({
      query: addToCartMutation,
      variables: {
        cartId: cart.id as string,
        lines,
      },
    });

    return cart.checkoutUrl;
  } catch (err) {
    return undefined;
  }
};

export { buyProduct };
