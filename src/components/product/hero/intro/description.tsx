import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Product } from "@/lib/shopify/types";

export default function Description(data: Product) {
  return (
    <div>
      <p className="font-[area]  text-[0.85rem] sm:text-[1rem] leading-[120%]">
        {data.description}
      </p>

      <div className="grid grid-cols-2 mt-2 sm:mt-5 gap-2  m-auto">
        <div className="bg-[#ECF4EC] rounded-[0.625rem]  p-4 flex-col w-full flex items-center justify-center gap-2">
          <Image src="/svg/paint.svg" alt="" height={30} width={30}></Image>
          <p className="text-[0.875rem] font-[area] px-3 text-center pt-1 leading-[100%]">
            Custom made to order
          </p>
        </div>
        <div className="bg-[#ECF4EC] rounded-[0.625rem] p-4 flex-col w-full flex items-center justify-center gap-2">
          <Image src="/svg/truck.svg" alt="" height={30} width={30}></Image>
          <p className="text-[0.875rem] font-[area] px-3 text-center pt-1 leading-[100%]">
            Fast International Shipping
          </p>
        </div>
        <div className="bg-[#ECF4EC] rounded-[0.625rem] p-4 flex-col w-full flex items-center justify-center gap-2">
          <Image src="/svg/box.svg" alt="" height={30} width={30}></Image>
          <p className="text-[0.875rem] font-[area] px-3 text-center pt-1 leading-[100%]">
            Easy 14-Day Returns*
          </p>
        </div>
        <div className="bg-[#ECF4EC] rounded-[0.625rem] p-4 flex-col w-full flex items-center justify-center gap-2">
          <Image src="/svg/paint.svg" alt="" height={30} width={30}></Image>
          <p className="text-[0.875rem] font-[area] px-3 text-center pt-1 leading-[100%]">
            Support Independent artists
          </p>
        </div>
      </div>
      <Accordion
        type="multiple"
        className="border-t-2 border-black mt-2 sm:mt-5"
      >
        <AccordionItem value="item-1" className="!border-b-2 border-black">
          <AccordionTrigger className="  !py-3 !text-[1rem] font-[area] !font-extrabold">
            Details
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 font-[area] max-h-50 overflow-y-auto !text-[0.8rem] sm:text-[1rem]!">
            <p className="w-fit">
              This product is crafted with quality materials to ensure
              durability and performance. Designed with your convenience in
              mind, it seamlessly fits into your everyday life
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="!border-b-2 border-black">
          <AccordionTrigger className="  !py-3  !text-[1rem] font-[area] !font-extrabold">
            Shipping & Returns
          </AccordionTrigger>
          <AccordionContent className="flex max-h-[600px] flex-col gap-4 font-[area]  overflow-y-auto !text-[0.8rem] sm:text-[1rem]! ">
            <p className="w-fit">
              We strive to process and ship all orders in a timely manner,
              working diligently to ensure that your items are on their way to
              you as soon as possible.
              <br />
              We are committed to ensuring a positive shopping experience for
              all our customers. If for any reason you wish to return an item,
              we invite you to reach out to our team for assistance, and we will
              evaluate every return request with care and consideration.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
