import React, { ReactNode } from "react";
import Banner from "@/components/banner";
import { ArticleStore } from "@/store/blog.store";
export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Banner></Banner>
      <ArticleStore>{children}</ArticleStore>;
    </>
  );
}
