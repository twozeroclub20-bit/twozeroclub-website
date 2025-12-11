import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import Card from "./card";
export default function CardCarousel({ data }: { data: any[] }) {
  return (
    <Carousel>
      <CarouselContent>
        {data.map((item, idx) => (
          <CarouselItem key={item.id}>
            <Card idx={idx} {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselDots className="mb-4" />
    </Carousel>
  );
}
