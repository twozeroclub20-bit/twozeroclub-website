"use server";
import { shopifyFetch } from "@/lib/store-front";
import { cookies } from "next/headers";
import { Cart, ShopifyCartOperation } from "@/lib/shopify/types";
import { createCart } from "@/lib/shopify/util";
import { getCartQuery } from "@/lib/shopify/queries/cart";
import { reshapeCart } from "@/lib/shopify/util";
import { getCustomer } from "../customer/get.action";
import { db } from "@/lib/db";
import { updateUserCart } from "./user.action";

async function isCartValid(cartId: string): Promise<boolean> {
  const res = await shopifyFetch<ShopifyCartOperation>({
    query: getCartQuery,
    variables: { cartId },
  });

  return Boolean(res.body.data.cart);
}

async function findOrCreateCartForCustomer(customerId: string) {
  const existingCart = await db.userCart.findUnique({
    where: { userId: customerId },
  });
  if (existingCart?.cartId) {
    const valid = await isCartValid(existingCart.cartId);
    if (valid) return existingCart.cartId;
    console.log("found cart", valid);
  }

  const newCart = await createCart();
  await updateUserCart({ userId: customerId, cartId: newCart.id as string });
  return newCart.id as string;
}

async function findOrCreateCartForGuest() {
  const cookieStore = await cookies();
  const cartId = cookieStore.get("cartId")?.value;
  if (cartId) return cartId;
  const newCart = await createCart();

  cookieStore.set({
    name: "cartId",
    value: newCart.id as string,
    path: "/",
    httpOnly: true,
  });

  return newCart.id as string;
}

async function resolveCartId(): Promise<string | undefined> {
  const customer = await getCustomer();

  if (customer?.id) {
    return findOrCreateCartForCustomer(customer.id);
  }
  return findOrCreateCartForGuest();
}

export async function getCart(): Promise<Cart | undefined> {
  const cartId = await resolveCartId();
  if (!cartId) return undefined;

  const res = await shopifyFetch<ShopifyCartOperation>({
    query: getCartQuery,
    variables: { cartId },
  });

  return reshapeCart(res.body.data.cart);
}
