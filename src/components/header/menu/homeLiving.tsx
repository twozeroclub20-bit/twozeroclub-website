import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger2,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import ShopByColor from "./shopByColor";
import React from "react";
import Image from "next/image";
export default function HomeLiving({
  close,
}: {
  close: (val: boolean) => void;
}) {
  const router = useRouter();
  function handleClick(sub: string) {
    router.push(`/Home Living/${sub}`);
    close(false);
  }
  return (
    <AccordionItem value="item-2" className="!border-b-1 border-black/50">
      <AccordionTrigger2 className="  !text-[1.125rem] font-area !font-black">
        Home & Living
      </AccordionTrigger2>
      <AccordionContent className="flex flex-col gap-2 font-area max-h-[10000px] overflow-y-auto !text-[1rem]">
        <h2 className="text-[10px] font-bold  font-area text-[#F33C14]">
          LIVING ROOM
        </h2>
        <ul className="pl-0 font-area cursor-pointer">
          <li onClick={() => handleClick("Rugs")}>Rugs</li>
          <li onClick={() => handleClick("Throw Blankets")}>Throw Blankets </li>
          <li onClick={() => handleClick("Throw Pillows")}>Throw Pillows </li>
          <li onClick={() => handleClick("Wall Clocks")}>Wall Clocks </li>
          <li onClick={() => handleClick("Tapestries")}>Tapestries</li>
        </ul>
        <h2 className="text-[10px] font-bold  font-area text-[#08814E]">
          BEDROOM
        </h2>
        <ul className="pl-0 font-area">
          <li onClick={() => handleClick("Duvet Covers")}>Duvet Covers</li>
          <li onClick={() => handleClick("Pillow Covers")}>Pillow Covers</li>
        </ul>
        <h2 className="text-[10px] font-bold  font-area text-[#064BD6]">
          BATHROOM
        </h2>
        <ul className="pl-0 font-area">
          <li onClick={() => handleClick("Bath Mats")}>Bath Mats</li>
          <li onClick={() => handleClick("Towels")}>Towels </li>
          <li onClick={() => handleClick("Shower Curtains")}>
            Shower Curtains
          </li>
        </ul>
        <ShopByColor click={handleClick}></ShopByColor>
        <Image
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className="w-full"
          src={"/images/menu/home-living.png"}
          alt="menu-image"
          width="750"
          height="500"
        ></Image>
      </AccordionContent>
    </AccordionItem>
  );
}
