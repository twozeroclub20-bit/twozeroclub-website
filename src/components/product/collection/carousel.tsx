import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import { useFullCollectionStore } from "@/store/full-collection.store";
import Loading from "./loading";
import Card from "./card";
export default function CardCarousel() {
  const { products, isFetching, isError, isLoading } = useFullCollectionStore();

  const items = products?.slice(0, 5) || [];

  if (isFetching || isLoading || !products) {
    return (
      <Carousel>
        <CarouselContent>
          {Array.from([1, 2, 3, 4]).map((item) => (
            <CarouselItem
              key={item}
              className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <Loading />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className="mb-4" />
      </Carousel>
    );
  }

  return (
    <Carousel>
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem
            key={item.id}
            className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
          >
            <Card {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots className="mb-4" />
    </Carousel>
  );
}
