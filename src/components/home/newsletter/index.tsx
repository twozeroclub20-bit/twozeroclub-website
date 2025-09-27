import React from "react";
import StaticData from "@/assets/static/home.static.json";
import NewsletterCard from "./card";
import CardCarousel from "./carousel";
export default function Newsletter() {
  return (
    <section className="max-w-[1800px] px-4 md:px-16  w-full m-auto my-20">
      <div
        className="hidden sm:grid 
           sm:grid-cols-2
            lg:grid-cols-3 place-items-start gap-4 "
      >
        {StaticData.newsletter.map((ele) => {
          return <NewsletterCard {...ele} key={ele.id.toString()} />;
        })}
      </div>

      <div
        className="block sm:hidden
          "
      >
        <CardCarousel data={StaticData.newsletter}></CardCarousel>
      </div>
    </section>
  );
}
