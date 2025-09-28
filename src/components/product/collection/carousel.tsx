import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import { useCollectionStore } from "@/store/collection.store";
import Card from "./card";
export default function CardCarousel() {
  const { products, isFetching, isError, isLoading } = useCollectionStore();
  if (isFetching || isLoading || !products) {
    return <></>;
  }
  return (
    <Carousel>
      <CarouselContent>
        {products.map((item) => (
          <CarouselItem key={item.id}>
            <Card {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselDots className="mb-4" />
    </Carousel>
  );
}
