import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger2,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import ShopByColor from "./shopByColor";
import React from "react";
import Image from "next/image";
export default function Clothing({ close }: { close: (val: boolean) => void }) {
  const router = useRouter();
  function handleClick(sub: string) {
    router.push(`/Clothing Lifestyle/${sub}`);
    close(false);
  }
  return (
    <AccordionItem value="item-4" className="!border-b-1 border-black/50">
      <AccordionTrigger2 className="  !text-[1.125rem] font-area !font-black">
        Clothing & Lifestyle
      </AccordionTrigger2>
      <AccordionContent className="flex flex-col gap-2 font-area max-h-[10000px] overflow-y-auto !text-[1rem]">
        <h2 className="text-[10px] font-bold  font-area text-[#F33C14]">
          CLOTHING
        </h2>
        <ul className="pl-0 font-area cursor-pointer">
          <li onClick={() => handleClick("Hoodies")}>Hoodies</li>
          <li onClick={() => handleClick("Sweatshirts")}>Sweatshirts </li>
          <li onClick={() => handleClick("Short Sleeve Tees")}>
            Short Sleeve Tees
          </li>
          <li onClick={() => handleClick("Long Sleeve Tees")}>
            Long Sleeve Tees
          </li>
        </ul>
        <h2 className="text-[10px] font-bold  font-area text-[#08814E]">
          LIFESTYLE
        </h2>
        <ul className="pl-0 font-area cursor-pointer">
          <li onClick={() => handleClick("Beach Towels")}>Beach Towels</li>
          <li onClick={() => handleClick("Travel Mugs")}>Travel Mugs</li>
          <li onClick={() => handleClick("Water Bottles")}>Water Bottles</li>
          <li onClick={() => handleClick("Tote Bags")}>Tote Bags</li>
          <li onClick={() => handleClick("Pouches")}>Pouches</li>
        </ul>
        <ShopByColor click={handleClick}></ShopByColor>
        <Image
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className="w-full"
          src={"/images/menu/wall-decor.png"}
          alt="menu-image"
          width="750"
          height="500"
        ></Image>
      </AccordionContent>
    </AccordionItem>
  );
}
