import React, { ReactNode } from "react";
import { ArticleStore } from "@/store/blog.store";
export default function layout({ children }: { children: ReactNode }) {
  return <ArticleStore>{children}</ArticleStore>;
}
