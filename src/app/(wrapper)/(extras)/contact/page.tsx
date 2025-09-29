import React from "react";
import Contact from "@/components/contact";
export default function page() {
  return (
    <section className="max-w-[1800px] m-auto py-8 px-4 md:px-16 flex flex-col  ">
      <h4 className="font-[area] text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] font-bold">
        Home • Contact Us
      </h4>
      <Contact></Contact>
    </section>
  );
}
