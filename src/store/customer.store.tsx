"use client";

import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { ShopifyCustomer } from "@/lib/shopify/types";
import { getCustomer } from "@/actions/customer/get.action";

interface CustomerStoreInterface {
  isFetching: boolean;
  isError: boolean;
  isLoading: boolean;
  customer: ShopifyCustomer | null;
  error: Error | null;
}

const CustomerStoreContext = createContext<CustomerStoreInterface | null>(null);

export const CustomerStore = ({ children }: { children: React.ReactNode }) => {
  const {
    isFetching,
    isError,
    isLoading,
    data: customer,
    error,
  } = useQuery<ShopifyCustomer | null>({
    queryKey: ["customer"],

    queryFn: async () => {
      const res = await getCustomer();
      return res;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return (
    <CustomerStoreContext.Provider
      // @ts-ignore
      value={{ isLoading, isError, isFetching, customer, error }}
    >
      {children}
    </CustomerStoreContext.Provider>
  );
};

export const useCustomerStore = () => {
  const ctx = useContext(CustomerStoreContext);
  if (!ctx)
    throw new Error("useCustomerStore must be used inside CustomerStore");
  return ctx;
};
