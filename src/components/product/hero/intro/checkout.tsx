import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Checkout() {
  return (
    <Button className="bg-[#5433EB] hover:bg-[#5031db] font-[area] rounded-full text-[0.75rem] md:text-[1rem] font-semibold px-5  w-full">
      Pay with
      <Image
        src="/svg/shop-pay.svg"
        alt="basket"
        width={86}
        height={20}
        className=" h-[15px] w-[60px] md:h-[20px] md:w-[86px]"
      ></Image>
    </Button>
  );
}
