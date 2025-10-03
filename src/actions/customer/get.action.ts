"use server";
import { shopifyFetch } from "@/lib/store-front";
import {
  ShopifyCustomer,
  ShopifyGetCustomerOperation,
} from "@/lib/shopify/types";
import { getCustomerQuery } from "@/lib/shopify/queries/customer";
import { cookies } from "next/headers";
export const getCustomer = async () => {
  const accessToken = (await cookies()).get("customerAccessToken")?.value;

  if (!accessToken) return null;

  try {
    const res = await shopifyFetch<ShopifyGetCustomerOperation>({
      query: getCustomerQuery,
      variables: {
        customerAccessToken: accessToken,
      },
    });

    return res.body.data.customer as ShopifyCustomer;
  } catch (err) {
    return null;
  }
};
