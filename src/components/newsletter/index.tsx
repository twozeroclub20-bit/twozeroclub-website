"use client";

import React from "react";
import Image from "next/image";
import NewsletterForm from "./form";
export default function Newsletter() {
  return (
    <section className="bg-brown p-6 md:p-[3.125rem]">
      <div className=" flex justify-center gap-10 lg:gap-[7rem] items-center flex-col   [@media(min-width:550px)]:flex-row  max-w-[2000px] m-auto">
        <Image
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA..."
          placeholder="blur"
          src="/images/newsletter.png"
          alt="newsletter-image"
          width="1000"
          height="1000"
          className="w-[300px] xl:w-[600px]"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        ></Image>

        <div className="space-y-[1.5rem] ">
          <div className="gap-[10px] flex flex-col">
            <div className="flex flex-col">
              <h2 className=" text-3xl md:text-4xl xl:text-[3.125rem] leading-4xl xl:leading-[2.75rem] font-editorial ">
                Get updates, offers
              </h2>
              <h2 className=" text-3xl md:text-4xl xl:text-[3.125rem] leading-4xl xl:leading-[2.75rem] font-editorial ">
                & special invites.
              </h2>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-lg xl:text-[1.2rem] font-area leading-[120%] ">
                Join our newsletter &
              </span>
              <span className="text-sm sm:text-lg xl:text-[1.2rem] font-area leading-[120%] ">
                get 20% off your first order.
              </span>
            </div>
          </div>
          <NewsletterForm></NewsletterForm>
        </div>
      </div>
    </section>
  );
}
