"use client";

import React from "react";
import Image from "next/image";
import NewsletterForm from "./form";
export default function Newsletter() {
  return (
    <section className="bg-brown p-6 md:p-10 ">
      <div className=" flex justify-center gap-5 sm:gap-10 items-center flex-col lg:flex-row  max-w-[2000px] m-auto">
        <Image
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA..."
          placeholder="blur"
          src="/images/newsletter.png"
          alt="newsletter-image"
          width="1000"
          height="1000"
          className="lg:w-[700px] w-full"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        ></Image>

        <div className="w-full lg:w-[500px] space-y-2">
          <h2 className="text-3xl md:text-4xl xl:text-[2.75rem] leading-4xl xl:leading-[2.75rem] font-editorial w-full  ">
            Get updates, offers & special invites.
          </h2>
          <p className="text-sm sm:text-lg xl:text-[1.2rem] w-full sm:w-[80%] font-area leading-[120%] ">
            Join our newsletter & get 20% off your first order.
          </p>
          <NewsletterForm></NewsletterForm>
        </div>
      </div>
    </section>
  );
}
