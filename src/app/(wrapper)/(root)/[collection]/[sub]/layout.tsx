import React from "react";
import { CollectionStore } from "@/store/collection.store";
export default function layout({ children }: { children: React.ReactNode }) {
  return <CollectionStore>{children}</CollectionStore>;
}
