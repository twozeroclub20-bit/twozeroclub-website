import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Cart() {
  return (
    <Button className="bg-[#F33C14] hover:bg-[#ee3b13] flex items-center justify-center font-[area] rounded-full text-[0.75rem] md:text-[1rem] font-semibold px-5  flex-1">
      Add to basket
      <Image
        src="/svg/basket.svg"
        alt="basket"
        width={18}
        height={21}
        className=" h-[14px] w-[12px] md:h-[21px] md:w-[18]"
      ></Image>
    </Button>
  );
}
