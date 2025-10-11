// "use server";
// import { shopifyFetch } from "@/lib/store-front";
// import { ShopifyResetCustomerOperation } from "@/lib/shopify/types";

// import { customerResetMutation } from "@/lib/shopify/mutations/customer";

// export const recovery = async ({ password }: { password: string }) => {
//   try {
//     const res = await shopifyFetch<ShopifyResetCustomerOperation>({
//       query: customerResetMutation,
//       variables: {
//         id: "",
//         input: {
//           password,
//           resetToken: "",
//         },
//       },
//     });
//     if (res.body.data.customerRecover.customerUserErrors) {
//       const err = res.body.data.customerRecover.customerUserErrors.map(
//         (error) => error.message
//       );

//       return { success: false, message: err.join(", ") };
//     }

//     return {
//       success: true,
//       message: "Recovery email has been send",
//     };
//   } catch (err) {
//     return { success: false, message: "Request failed, please try again." };
//   }
// };

export {};
