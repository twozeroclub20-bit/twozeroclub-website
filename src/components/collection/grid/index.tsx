"use client";

import Card from "./card";
import { useCollectionStore } from "@/store/collection.store";

export default function Grid() {
  const { isLoading, isFetching, products } = useCollectionStore();

  if (isLoading || isFetching || !products)
    return (
      <div className="col-span-full text-center text-muted-foreground">
        Loading Products...
      </div>
    );

  return (
    <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
      {products.length > 0 ? (
        products?.map((product) => <Card key={product.id} {...product} />)
      ) : (
        <div className="col-span-full text-center text-gray-foreground">
          No products found.
        </div>
      )}
    </div>
  );
}
