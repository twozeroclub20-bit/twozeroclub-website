"use client";

import React, { useEffect, useState } from "react";
import Tabs from "./tabs";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Orders from "./orders";
import Shipping from "./shipping";
import General from "./general";
import ContactUs from "./contact";
import About from "./about";
function _FAQ() {
  const [active, toggle] = useState("about");
  const query = useSearchParams();
  useEffect(() => {
    const val = query.get("tab");
    if (val) toggle(val);
    else toggle("about");
  }, [query.get("tab")]);

  return (
    <div className="max-w-[1000px] w-[60%]  m-auto ">
      <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-[editorial] mb-5">
        Frequently Asked Questions
      </h2>
      <Tabs active={active} toggle={toggle}></Tabs>
      <div
        className={`mt-8 border-t-2 ${
          active === "contact" ? "border-transparent" : " border-black"
        } `}
      >
        {active === "order" && <Orders />}
        {active === "shipping" && <Shipping />}
        {active === "general" && <General />}
        {active === "about" && <About />}
        {active === "contact" && <ContactUs />}
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <Suspense fallback={<></>}>
        <_FAQ />
      </Suspense>
    </>
  );
}
