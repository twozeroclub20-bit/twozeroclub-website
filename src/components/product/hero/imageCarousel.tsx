import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";

export default function ImageCarousel({ data }: { data: any }) {
  return (
    <>
      <div className="w-3/5 hidden md:grid grid-cols-1 lg:grid-cols-2  max-h-[800px] overflow-y-auto no-scrollbar">
        {data.images.map((ele: any) => (
          <Image
            key={ele.altText}
            src={ele.url}
            alt={"image"}
            width={1000}
            className="w-full  rounded-md aspect-3/4"
            height={1600}
          ></Image>
        ))}
      </div>

      <Carousel className="w-full block md:hidden">
        <CarouselContent>
          {data.images.map((ele: any) => (
            <CarouselItem key={ele.altText}>
              <Image
                key={ele.altText}
                src={ele.url}
                alt={"image"}
                width={200}
                className="w-full rounded-md aspect-3/4"
                height={500}
              ></Image>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselDots className="mb-4" />
      </Carousel>
    </>
  );
}
