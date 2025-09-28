import React from "react";
import { ProductStore } from "@/store/product.store";
export default function layout({ children }: { children: React.ReactNode }) {
  return <ProductStore>{children}</ProductStore>;
}
