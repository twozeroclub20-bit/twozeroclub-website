"use server";
import { shopifyFetch } from "@/lib/store-front";
import { ShopifySignupCustomerOperation } from "@/lib/shopify/types";

import { signupCustomerMutation } from "@/lib/shopify/mutations/customer";
import { cookies } from "next/headers";
export const newsletter = async (data: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
}) => {

};
