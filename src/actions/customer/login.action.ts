"use server";
import { shopifyFetch } from "@/lib/store-front";
import { ShopifyLoginCustomerOperation } from "@/lib/shopify/types";

import { loginCustomerMutation } from "@/lib/shopify/mutations/customer";
import { cookies } from "next/headers";
export const login = async (data: { email: string; password: string }) => {
  try {
    const res = await shopifyFetch<ShopifyLoginCustomerOperation>({
      query: loginCustomerMutation,
      variables: {
        input: data,
      },
    });
    if (res.body.data.customerAccessTokenCreate.customerUserErrors.length > 0) {
      const err =
        res.body.data.customerAccessTokenCreate.customerUserErrors.map(
          (error) => error.message
        );

      return { success: false, message: err.join(", ") };
    }
    const accessToken =
      res.body.data.customerAccessTokenCreate.customerAccessToken?.accessToken;
    const expireAt =
      res.body.data.customerAccessTokenCreate.customerAccessToken?.expiresAt;
    if (accessToken) {
      (await cookies()).set("customerAccessToken", accessToken, {
        httpOnly: true,
        path: "/",
        expires: new Date(expireAt || Date.now() + 30 * 24 * 60 * 60 * 1000),
      });
    }
    return { success: true, message: "Login Successful" };
  } catch (err) {
    return { success: false, message: "Login failed, please try again." };
  }
};
