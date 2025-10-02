import { addToCart } from "@/actions/cart/add.action";
import { getCart } from "@/actions/cart/get.action";
import { removeFromCart } from "@/actions/cart/remove.action";
import { updateCart } from "@/actions/cart/update.action";
import { redirect } from "next/navigation";
import { useCart } from "@/provider/cart.provider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { buyProduct } from "@/actions/cart/buy.action";
import { useState } from "react";

export function useBuyItem() {
  const [loading, setLoading] = useState(false);

  const buy = async (payload: { merchandiseId: string; quantity: number }) => {
    setLoading(true);
    const url = await buyProduct([payload]);
    if (url) {
      redirect(url);
    } else {
      setLoading(false);
      return "Error buying item";
    }
  };
  return { loading, buy };
}

type UpdatePayload = {
  merchandiseId: string;
  quantity: number;
};

export function useUpdateCart() {
  const queryClient = useQueryClient();
  const { setUpdating } = useCart();
  const mutation = useMutation({
    mutationFn: async ({ merchandiseId, quantity }: UpdatePayload) => {
      const cart = await getCart();
      if (!cart) throw new Error("Error fetching cart");

      const lineItem = cart.lines.find(
        (line: any) => line.merchandise.id === merchandiseId
      );

      if (lineItem && lineItem.id) {
        if (quantity === 0) {
          return await removeFromCart([lineItem.id]);
        } else {
          return await updateCart([
            { id: lineItem.id, merchandiseId, quantity },
          ]);
        }
      } else if (quantity > 0) {
        return await addToCart([{ merchandiseId, quantity }]);
      }

      return cart;
    },

    onMutate: async ({ merchandiseId, quantity }: UpdatePayload) => {
      setUpdating(true);
      await queryClient.cancelQueries({ queryKey: ["cart"] });

      const prevCart = queryClient.getQueryData<any>(["cart"]);

      if (prevCart) {
        const existingLine = prevCart.lines.find(
          (line: any) => line.merchandise.id === merchandiseId
        );

        let newLines;
        if (existingLine) {
          if (quantity === 0) {
            newLines = prevCart.lines.filter(
              (line: any) => line.merchandise.id !== merchandiseId
            );
          } else {
            newLines = prevCart.lines.map((line: any) =>
              line.merchandise.id === merchandiseId
                ? { ...line, quantity }
                : line
            );
          }
        } else if (quantity > 0) {
          newLines = [
            ...prevCart.lines,
            {
              id: `temp-${merchandiseId}`,
              merchandise: { id: merchandiseId },
              quantity,
            },
          ];
        } else {
          newLines = prevCart.lines;
        }

        queryClient.setQueryData(["cart"], {
          ...prevCart,
          lines: newLines,
        });
      }
      return { prevCart };
    },

    onError: (err, _, context) => {
      if (context?.prevCart) {
        queryClient.setQueryData(["cart"], context.prevCart);
      }
      console.error("Cart update failed", err);
    },

    onSuccess: (data) => {
      queryClient.setQueryData(["cart"], data);
    },
    onSettled: () => {
      setUpdating(false);
    },
  });

  return mutation;
}

export function useRedirectToCheckout() {
  const [loading, setLoading] = useState(false);
  const checkout = async () => {
    setLoading(true);
    let cart = await getCart();
    if (cart) {
      redirect(cart!.checkoutUrl);
    } else {
      setLoading(false);
    }
  };
  return { checkout, loading };
}
