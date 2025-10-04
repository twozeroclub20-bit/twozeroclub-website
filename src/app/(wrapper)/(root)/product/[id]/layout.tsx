import React from "react";
import { ProductStore } from "@/store/product.store";
import { FullCollectionStore } from "@/store/full-collection.store";
import { SimilarStore } from "@/store/similar.store";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <ProductStore>
      <FullCollectionStore>
        <SimilarStore>{children}</SimilarStore>
      </FullCollectionStore>
    </ProductStore>
  );
}
