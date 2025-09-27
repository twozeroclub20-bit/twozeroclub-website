"use server";
import { shopifyFetch } from "@/lib/store-front";
import { ShopifyCollectionProductsOperation } from "@/lib/shopify/types";
import { getCollectionProductsQuery } from "@/lib/shopify/queries/collection";

const removeEdgesAndNodes = <T>(array: { edges: { node: T }[] }) => {
  return array?.edges?.map((edge) => edge.node) || [];
};

const reshapeProducts = (products: any[]) => {
  return products.map((p) => ({
    id: p.id,
    title: p.title,
    thumbnail: p.featuredImage.url || "",
    description: p.description || "",
    price: p.priceRange?.minVariantPrice?.amount || "0",
  }));
};

export const getCollectionProducts = async ({
  reverse = false,
  collection,
  sortKey = "CREATED_AT",
}: {
  reverse?: boolean;
  collection: string;
  sortKey?: string;
}) => {
  const res = await shopifyFetch<ShopifyCollectionProductsOperation>({
    query: getCollectionProductsQuery,
    variables: {
      handle: collection,
      reverse,
      sortKey: sortKey === "CREATED_AT" ? "CREATED" : sortKey,
    },
  });

  if (!res.body.data.collection) {
    console.log(`No collection found for \`${collection}\``);
    return [];
  }
  return reshapeProducts(
    removeEdgesAndNodes(res.body.data.collection.products)
  );
};
