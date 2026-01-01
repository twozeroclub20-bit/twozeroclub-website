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
            We are proudly based out of Toronto, Canada - working with vendors
            and printing partners all over the world.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-area !font-extrabold">
          Do you really support independent artists?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-area max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            100%. Supporting independent artists is at the core of what we do -
            every piece starts with an artist. All of our designs are
            proprietary and we design everything in-house.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-area !font-extrabold">
          Is this sustainable?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-area max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            Yes. Everything is made to order, which means less waste, no
            overproduction, and a more sustainable way to create. It's more
            sustainable than traditional retail. We only make what's ordered,
            helping reduce excess inventory and waste.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="!border-b-2 border-black">
        <AccordionTrigger className="  !text-[1rem] font-area !font-extrabold">
          How can I reach out and contact you?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-area max-h-40 overflow-y-auto !text-[1rem]">
          <p className="w-fit">
            You can reach us anytime at <b>twozeroclub@gmail.com</b> — we will
            try out best to reply within 24 hours.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
