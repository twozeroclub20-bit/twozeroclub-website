import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import { useCollectionStore } from "@/store/collection.store";
import Loading from "./loading";
import Card from "./card";
export default function CardCarousel() {
  const { products, isFetching, isError, isLoading } = useCollectionStore();
  if (isFetching || isLoading || !products) {
    return (
      <>
        <Carousel>
          <CarouselContent>
            {Array.from([1, 2, 3]).map((item) => (
              <CarouselItem key={item}>
                <Loading />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselDots className="mb-4" />
        </Carousel>
      </>
    );
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
