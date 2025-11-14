import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import Card from "./card";
import { ShopifyArticle } from "@/lib/shopify/types";
export default function CardCarousel({
  data,
}: {
  data: ShopifyArticle[] | undefined;
}) {
  return (
    <Carousel>
      <CarouselContent>
        {data?.map((item) => (
          <CarouselItem key={item.id}>
            <Card article={item} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselDots className="mb-4" />
    </Carousel>
  );
}
