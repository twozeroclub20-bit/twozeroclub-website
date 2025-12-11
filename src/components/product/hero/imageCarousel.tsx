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
      <div className="w-1/2 xl:w-[72%] hidden md:grid grid-cols-1 xl:grid-cols-2">
        {data.images.map((ele: any) => (
          <Image
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            key={ele.altText}
            src={ele.url}
            alt={"image"}
            width={4000}
            className="w-full  rounded-md"
            height={1600}
          ></Image>
        ))}
      </div>

      <Carousel className="w-full block md:hidden">
        <CarouselContent>
          {data.images.map((ele: any) => (
            <CarouselItem key={ele.altText}>
              <Image
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                key={ele.altText}
                src={ele.url}
                alt={"image"}
                width={200}
                className="w-full rounded-md "
                height={0}
              ></Image>
            </CarouselItem>
          ))}
          <CarouselDots className="mb-4" />
        </CarouselContent>
      </Carousel>
    </>
  );
}
