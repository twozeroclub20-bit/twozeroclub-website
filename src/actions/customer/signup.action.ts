"use server";
import { shopifyFetch } from "@/lib/store-front";
import {
  ShopifySignupCustomerOperation,
  ShopifyLoginCustomerOperation,
} from "@/lib/shopify/types";

import {
  loginCustomerMutation,
  signupCustomerMutation,
} from "@/lib/shopify/mutations/customer";

import { cookies } from "next/headers";
export const signup = async (data: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await shopifyFetch<ShopifySignupCustomerOperation>({
      query: signupCustomerMutation,
      variables: {
        input: data,
      },
    });
    if (res.body.data.customerCreate.customerUserErrors.length > 0) {
      const err = res.body.data.customerCreate.customerUserErrors.map(
        (error) => error.message
      );
      console.log(res.body.data.customerCreate.customerUserErrors);
      return { success: false, message: err.join(", ") };
    }
    const login = await shopifyFetch<ShopifyLoginCustomerOperation>({
      query: loginCustomerMutation,
      variables: {
        input: {
          email: data.email,
          password: data.password,
        },
      },
    });
    if (
      login.body.data.customerAccessTokenCreate.customerUserErrors.length > 0
    ) {
      const err =
        login.body.data.customerAccessTokenCreate.customerUserErrors.map(
          (error) => error.message
        );

      return { success: false, message: err.join(", ") };
    }
    const accessToken =
      login.body.data.customerAccessTokenCreate.customerAccessToken
        ?.accessToken;
    const expireAt =
      login.body.data.customerAccessTokenCreate.customerAccessToken?.expiresAt;
    if (accessToken) {
      (await cookies()).set("customerAccessToken", accessToken, {
        httpOnly: true,
        path: "/",
        expires: new Date(expireAt || Date.now() + 30 * 24 * 60 * 60 * 1000),
      });
    }
    return { success: true, message: "Signup Successful" };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Please try again." };
  }
};
