import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger2,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import ShopByColor from "./shopByColor";
import React from "react";
import Image from "next/image";
export default function Tech({ close }: { close: (val: boolean) => void }) {
  const router = useRouter();
  function handleClick(sub: string) {
    router.push(`/Tech Accessories/${sub}`);
    close(false);
  }
  return (
    <AccordionItem value="item-3" className="!border-b-1 border-black/50">
      <AccordionTrigger2 className="  !text-[1.125rem] font-area !font-black">
        Tech & Accessories
      </AccordionTrigger2>
      <AccordionContent className="flex flex-col gap-4 font-area max-h-[10000px] overflow-y-auto !text-[1rem]">
        <div className="pl-0 font-area cursor-pointer flex flex-col gap-1">
          <li onClick={() => handleClick("Phone Cases")}>Phone Cases</li>
          <li onClick={() => handleClick("Desk Mats")}>Desk Mats </li>
          <li onClick={() => handleClick("Notebooks")}>Notebooks </li>
          <li onClick={() => handleClick("Stickers")}>Stickers</li>
        </div>
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
