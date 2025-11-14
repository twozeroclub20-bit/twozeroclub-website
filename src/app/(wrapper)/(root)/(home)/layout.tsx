import React, { ReactNode } from "react";
import { TrendingStore } from "@/store/trending.store";
import { BlogsStore } from "@/store/blogs.store";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Two Zero Club",
};
export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <TrendingStore>
        <BlogsStore>{children}</BlogsStore>
      </TrendingStore>
    </>
  );
}
