import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <Accordion type="multiple" className="">
      <AccordionItem value="item-1" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-area !font-extrabold">
          What is TwoZero Club?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-area max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            A design-driven lifestyle brand. We create art prints, apparel, and
            objects in collaboration with independent artists. Everything is
            made to order — not mass produced, not for everyone.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-area !font-extrabold">
          Where are you based out of?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-area max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            A design-driven lifestyle brand. We create art prints, apparel, and
            objects in collaboration with independent artists. Everything is
            made to order — not mass produced, not for everyone.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-area !font-extrabold">
          Do you really support independent artists?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-area max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            A design-driven lifestyle brand. We create art prints, apparel, and
            objects in collaboration with independent artists. Everything is
            made to order — not mass produced, not for everyone.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-area !font-extrabold">
          Is this sustainable?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-area max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            A design-driven lifestyle brand. We create art prints, apparel, and
            objects in collaboration with independent artists. Everything is
            made to order — not mass produced, not for everyone.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-area !font-extrabold">
          How can I reach out and contact you?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-area max-h-40 overflow-y-auto !text-[1rem]">
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
