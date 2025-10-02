import React from "react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart.store";
import { useCart } from "@/provider/cart.provider";
import { Loader } from "lucide-react";
import { useRedirectToCheckout } from "@/hooks/cart.hooks";
export default function Checkout() {
  const { cart, isLoading, isFetching } = useCartStore();
  const { updating } = useCart();
  const { checkout, loading } = useRedirectToCheckout();
  if (!cart || cart?.lines.length === 0) return <></>;
  return (
    <>
      <p className="text-[0.6rem] xs:text-[0.75rem] mb-2 text-center w-full sm:w-[80%] text-muted-foreground m-auto">
        Shipping and taxes are estimated and will be updated during checkout
        based on your billing and shipping information.
      </p>
      <Button
        onClick={() => {
          checkout();
        }}
        disabled={isFetching || isLoading || !cart || updating || loading}
        className="!py-1.5 md:!py-3 !h-auto w-full rounded-full text-[0.6rem] xs:text-[0.75rem]"
      >
        {isLoading || isFetching || updating || loading ? (
          <Loader className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <>Proceed to Pay ${cart?.cost.totalAmount.amount}</>
        )}
      </Button>
    </>
  );
}
