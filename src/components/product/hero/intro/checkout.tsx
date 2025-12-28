import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useBuyItem } from "@/hooks/cart.hooks";
import { useProduct } from "@/provider/product.provider";
import { Loader } from "lucide-react";
export default function Checkout() {
  const { buy, loading } = useBuyItem();
  const { variant, quantity } = useProduct();
  return (
    <Button
      disabled={loading}
      onClick={() => {
        if (!variant || quantity < 1) return;
        buy({ merchandiseId: variant.id, quantity });
      }}
      className="bg-[#5433EB] hover:bg-[#5031db] font-area rounded-full text-[0.9rem] md:text-[1rem] font-semibold px-5  w-full !h-[45px]"
    >
      {loading ? (
        <>
          <Loader className="animate-spin duration-500"></Loader>
        </>
      ) : (
        <>
          <span className="-translate-y-[1px]">Pay with</span>
          <Image
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            src="/svg/shop-pay.svg"
            alt="basket"
            width={86}
            height={20}
            className=" h-[15px] w-[60px] md:h-[20px] md:w-[86px]"
          ></Image>
        </>
      )}
    </Button>
  );
}
