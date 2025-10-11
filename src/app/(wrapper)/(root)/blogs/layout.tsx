import React, { ReactNode } from "react";
import { BlogsStore } from "@/store/blogs.store";
export default function layout({ children }: { children: ReactNode }) {
  return <BlogsStore>{children}</BlogsStore>;
}
