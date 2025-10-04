import React from "react";
import { SearchStore } from "@/store/search.store";
export default function layout({ children }: { children: React.ReactNode }) {
  return <SearchStore>{children}</SearchStore>;
}
