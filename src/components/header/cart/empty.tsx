import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/provider/cart.provider";
export default function Empty() {
  const { setOpen } = useCart();
  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-4">
      <ShoppingCart className="w-12 h-12"></ShoppingCart>

      <h2 className="font-[area]">Your cart is empty</h2>

      <Button onClick={() => setOpen(false)}>Continue Shopping</Button>
    </div>
  );
}
