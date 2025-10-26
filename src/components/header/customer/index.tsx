"use client";
import React, { useState } from "react";
import { useCustomerStore } from "@/store/customer.store";
import { useRouter } from "next/navigation";
import UserIcon from "../icons/user";

export default function Customer() {
  const { push } = useRouter();
  const { customer, isLoading, isFetching } = useCustomerStore();
  const [showMenu, setShowMenu] = useState(false);

  const SHOPIFY_STORE_URL =
    process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "your-store.myshopify.com";

  console.log(SHOPIFY_STORE_URL);
  const handleUserClick = () => {
    if (!customer) {
      push("/auth/login");
    } else {
      setShowMenu(!showMenu);
    }
  };

  const redirectTo = (path: string) => {
    window.location.href = `https://${SHOPIFY_STORE_URL}${path}`;
  };

  return (
    <div className="relative">
      {isLoading || isFetching ? (
        <UserIcon className="w-5 h-5 xs:w-7 xs:h-7 text-muted-foreground" />
      ) : (
        <>
          <UserIcon
            className="w-5 h-5 xs:w-7 xs:h-7 cursor-pointer"
            onClick={handleUserClick}
          />

          {showMenu && customer && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
              <button
                onClick={() => redirectTo("/account")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </button>
              <button
                onClick={() => redirectTo("/account/orders")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Orders
              </button>
          
            </div>
          )}
        </>
      )}
    </div>
  );
}
