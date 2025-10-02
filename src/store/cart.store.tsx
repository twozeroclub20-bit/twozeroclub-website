"use client";

import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "@/actions/cart/get.action";
import { Cart } from "@/lib/shopify/types";

interface CartStoreInterface {
  isFetching: boolean;
  isError: boolean;
  isLoading: boolean;
  cart: Cart | undefined;
  error: Error | null;
}

const CartStoreContext = createContext<CartStoreInterface | null>(null);

export const CartStore = ({ children }: { children: React.ReactNode }) => {
  const {
    isFetching,
    isError,
    isLoading,
    data: cart,
    error,
  } = useQuery<Cart | undefined>({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await getCart();
      return res;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return (
    <CartStoreContext.Provider
      value={{ isLoading, isError, isFetching, cart, error }}
    >
      {children}
    </CartStoreContext.Provider>
  );
};

export const useCartStore = () => {
  const ctx = useContext(CartStoreContext);
  if (!ctx) throw new Error("useCartStore must be used inside CartStore");
  return ctx;
};
