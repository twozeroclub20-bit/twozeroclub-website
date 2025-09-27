import React from "react";
import Breadcrump from "@/components/collection/breadcrump";
import Tags from "@/components/collection/tags";
import Grid from "@/components/collection/grid";
export default function page() {
  return (
    <section className=" max-w-[1800px] mt-10 md:mt-20 lg:mt-5 px-4 md:px-16 my-10 gap-5 m-auto ">
      <Breadcrump></Breadcrump>
      <Tags></Tags>
      <Grid></Grid>
    </section>
  );
}
