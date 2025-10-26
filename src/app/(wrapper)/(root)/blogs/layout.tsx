import React, { ReactNode } from "react";
import { BlogsStore } from "@/store/blogs.store";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Two Zero Club",
};

export default function layout({ children }: { children: ReactNode }) {
  return <BlogsStore>{children}</BlogsStore>;
}
