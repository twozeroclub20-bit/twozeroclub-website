"use client";

import React, { useMemo, useEffect, useState } from "react";
import Card from "./card";
import { useParams } from "next/navigation";
import { getCollectionProducts } from "@/actions/products/get.action";

export default function Grid() {
  const { collection, sub } = useParams();

  const decodedCollection = collection
    ? decodeURIComponent(collection.toString())
    : "";
  const decodedSub = sub ? decodeURIComponent(sub.toString()) : "";

  const query = useMemo(() => {
    return `${decodedSub.split(" ").join("-").toLowerCase()}-${decodedCollection
      .split(" ")
      .join("-")
      .toLowerCase()}`;
  }, [decodedCollection, decodedSub]);

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await getCollectionProducts({
          collection: "Test",
          sortKey: "CREATED",
          reverse: false,
        });
        setProducts(res);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    }

    if (query) {
      fetchProducts();
    }
  }, [query]);

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
      {products.length > 0 ? (
        products.map((product) => <Card key={product.id} {...product} />)
      ) : (
        <div className="col-span-full text-center text-gray-500">
          No products found.
        </div>
      )}
    </div>
  );
}
