import { CartItem } from "@/lib/shopify/types";
import React, { useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useUpdateCart } from "@/hooks/cart.hooks";
import { useDebounce } from "@uidotdev/usehooks";
export default function Quantity(data: CartItem) {
  const [q, setQ] = useState(data.quantity);
  const { mutateAsync } = useUpdateCart();
  const debouncedq = useDebounce(q, 300);
  useEffect(() => {
    mutateAsync({
      merchandiseId: data.merchandise.id,
      quantity: debouncedq,
    });
  }, [debouncedq]);
  return (
    <div className=" flex items-center ml-auto mt-auto pt-3 gap-3">
      <Minus
        className="size-3 cursor-pointer"
        onClick={() => {
          setQ((q) => (q > 1 ? q - 1 : 1));
        }}
      />
      <div className=" w-16 text-[1rem] md:text-[1.125rem] font-semibold flex-1 text-center">
        {q}x
      </div>
      <Plus
        className="size-3 cursor-pointer"
        onClick={() => {
          setQ((q) => q + 1);
        }}
      ></Plus>
    </div>
  );
}
