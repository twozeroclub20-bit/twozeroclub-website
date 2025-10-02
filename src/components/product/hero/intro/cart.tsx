import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useProduct } from "@/provider/product.provider";
import { useUpdateCart } from "@/hooks/cart.hooks";
import { useCart } from "@/provider/cart.provider";
import { Loader } from "lucide-react";
export default function Cart() {
  const { mutateAsync, isPending } = useUpdateCart();
  const { variant, quantity } = useProduct();
  const { setOpen } = useCart();

  const handleClick = async () => {
    if (!variant || quantity < 0) return;
    await mutateAsync({ merchandiseId: variant.id, quantity });
    setOpen(true);
  };

  return (
    <Button
      disabled={isPending}
      onClick={handleClick}
      className="bg-[#F33C14] hover:bg-[#ee3b13] flex items-center justify-center font-[area] rounded-full text-[0.75rem] md:text-[1rem] font-semibold px-5  flex-1"
    >
      {isPending ? (
        <>
          <Loader className="animate-spin duration-500"></Loader>
        </>
      ) : (
        <>
          Add to basket
          <Image
            src="/svg/basket.svg"
            alt="basket"
            width={18}
            height={21}
            className=" h-[14px] w-[12px] md:h-[21px] md:w-[18]"
          ></Image>
        </>
      )}
    </Button>
  );
}
