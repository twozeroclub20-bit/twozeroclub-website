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
        <AccordionTrigger className="  !text-[1rem] font-[area] !font-extrabold">
          {"I've"} placed an order, what next?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-[area] max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            A design-driven lifestyle brand. We create art prints, apparel, and
            objects in collaboration with independent artists. Everything is
            made to order — not mass produced, not for everyone.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-[area] !font-extrabold">
          Can I track my orders?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-[area] max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            A design-driven lifestyle brand. We create art prints, apparel, and
            objects in collaboration with independent artists. Everything is
            made to order — not mass produced, not for everyone.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-[area] !font-extrabold">
          What should I do if the item received is faulty / damaged?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-[area] max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            A design-driven lifestyle brand. We create art prints, apparel, and
            objects in collaboration with independent artists. Everything is
            made to order — not mass produced, not for everyone.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-[area] !font-extrabold">
          {"What's"} your return and exchange policy?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-[area] max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            A design-driven lifestyle brand. We create art prints, apparel, and
            objects in collaboration with independent artists. Everything is
            made to order — not mass produced, not for everyone.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-[area] !font-extrabold">
          Can I change/cancel my order?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-[area] max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            A design-driven lifestyle brand. We create art prints, apparel, and
            objects in collaboration with independent artists. Everything is
            made to order — not mass produced, not for everyone.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
