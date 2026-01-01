import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function General() {
  return (
    <Accordion type="multiple" className="">
      <AccordionItem value="item-1" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-area !font-extrabold">
          Where do you ship?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-area max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            We ship worldwide. Wherever you are, we'll get it to you.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-area !font-extrabold">
          How long does shipping take?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-area max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            Production times take 2-7 business days, followed by shipping that
            vary by location. However, we aim to get the items delivered between
            5-15 business days to most locations globally.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-area !font-extrabold">
          How much does shipping cost?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-area max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            Shipping costs vary by product and destination and are calculated at
            checkout.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-area !font-extrabold">
          Will I get a tracking number?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-area max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            Absolutely. You'll receive tracking details as soon as your order is
            on its way.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-area !font-extrabold">
          Can I change/cancel my order?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-area max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            You can request changes or cancellations shortly after placing your
            order, before production begins. Email us at{" "}
            <b>twozeroclub@gmail.com</b> to make any amendments. Unfortunately,
            if the items have been sent to production or has been shipped, we
            won't be able to change/cancel the order.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
