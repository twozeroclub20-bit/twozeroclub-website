import { useProduct } from "@/provider/product.provider";
import React from "react";
import { Plus, Minus } from "lucide-react";
export default function Quantity() {
  const { quantity, setQuantity } = useProduct();
  return (
    <div className=" flex items-center px-2 rounded-full border border-black w-30 ">
      <Minus
        className="size-3 cursor-pointer"
        onClick={() => setQuantity((q) => (q > 0 ? q - 1 : 0))}
      />
      <span className="text-[1rem] md:text-[1.125rem] font-semibold flex-1 text-center">
        {quantity}
      </span>
      <Plus
        className="size-3 cursor-pointer"
        onClick={() => setQuantity((quantity) => quantity + 1)}
      ></Plus>
    </div>
  );
}
