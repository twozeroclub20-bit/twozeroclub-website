import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Orders() {
  return (
    <Accordion type="multiple" className="">
      <AccordionItem value="item-1" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-area !font-extrabold leading-[150%]">
          {"I've"} placed an order, what next?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-area max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            After checkout, your order goes straight into production. We'll
            email you updates every step of the way. You'll receive an order
            confirmation and a shipping email as soon as it's ready to go.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-area !font-extrabold">
          Can I track my orders?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-area max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            Absolutely. You'll receive tracking details as soon as your order is
            on its way.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-area !font-extrabold">
          What should I do if the item received is faulty / damaged?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-area max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            Don't worry about it. Email us at <b>twozeroclub@gmail.com</b>{" "}
            within 7 days with photos of the issue, and we'll make it right.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-area !font-extrabold">
          {"What's"} your return and exchange policy?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-area max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            Because everything is made to order, we don't offer returns or
            exchanges for change of mind, unless the item arrives faulty or
            damaged from our end.
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
