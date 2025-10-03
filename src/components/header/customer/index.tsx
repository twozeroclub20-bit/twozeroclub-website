"use client";
import React from "react";
import { useCustomerStore } from "@/store/customer.store";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Loader, User } from "lucide-react";
export default function Customer() {
  const { push } = useRouter();
  const { customer, isLoading, isFetching } = useCustomerStore();
  return (
    <>
      {isLoading || isFetching ? (
        <></>
      ) : (
        <>
          {!customer ? (
            <>
              <Button
                disabled={isLoading || isFetching}
                onClick={() => push("/auth/login")}
              >
                Login
              </Button>
            </>
          ) : (
            <>
              <User className=" w-5 h-5 xs:w-7 xs:h-7"></User>
            </>
          )}
        </>
      )}
    </>
  );
}
