import React from "react";

import Similar from "@/components/product/similar";
import Hero from "@/components/product/hero";
import Collection from "@/components/product/collection";

export default function page() {
  return (
    <>
      <Hero></Hero>
      <Similar></Similar>
      <Collection></Collection>
    </>
  );
}
