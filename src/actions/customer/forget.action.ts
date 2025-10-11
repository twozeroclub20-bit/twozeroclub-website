"use server";
import { shopifyFetch } from "@/lib/store-front";
import { ShopifyRecoverCustomerOperation } from "@/lib/shopify/types";

import { customerRecoverMutation } from "@/lib/shopify/mutations/customer";

export const recovery = async ({ email }: { email: string }) => {
  console.log("called");
  try {
    const res = await shopifyFetch<ShopifyRecoverCustomerOperation>({
      query: customerRecoverMutation,
      variables: {
        email,
      },
    });
    if (res.body.data.customerRecover.customerUserErrors.length > 0) {
      const err = res.body.data.customerRecover.customerUserErrors.map(
        (error) => error.message
      );
      // console.error(err.join(", "));
      return { success: false, message: err.join(", ") };
    }
    console.log("mail sent");
    return {
      success: true,
      message: "Recovery email has been send",
    };
  } catch (err) {
    console.error("error ", err);
    return { success: false, message: "Request failed, please try again." };
  }
};
