"use client";

import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { ProductVariant } from "@/lib/shopify/types";
import { useProductStore } from "@/store/product.store";
interface ProductProviderInterface {
  variant: ProductVariant | null;
  selectVariant: (
    selectedOptions: {
      name: string;
      value: string;
    }[]
  ) => void;
  options: { name: string; values: string[] }[];
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

const ProductContext = createContext<ProductProviderInterface | null>(null);

export function ProductProvider({ children }: { children: ReactNode }) {
  const { product } = useProductStore();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState<ProductVariant | null>(null);
  const [options, setOptions] = useState<{ name: string; values: string[] }[]>(
    []
  );

  const selectVariant = (
    selectedOptions: {
      name: string;
      value: string;
    }[]
  ) => {
    if (!product || selectedOptions.length !== options.length) return;

    const normalize = (val: string) => val.trim().toLowerCase();

    const found = product.variants.find((variant) =>
      selectedOptions.every((opt) =>
        variant.selectedOptions.some(
          (vOpt) =>
            vOpt.name === opt.name &&
            normalize(vOpt.value) === normalize(opt.value)
        )
      )
    );

    setVariant(found ?? null);
  };

  useEffect(() => {
    if (!product) return;
    const optionsMap = new Map();
    for (const variant of product.variants) {
      for (const { name, value } of variant.selectedOptions) {
        if (!optionsMap.has(name)) {
          optionsMap.set(name, new Set());
        }
        optionsMap.get(name)!.add(value);
      }
    }
    const options = Array.from(optionsMap.entries()).map(([name, values]) => ({
      name,
      values: Array.from(values) as string[],
    }));

    setOptions(options);
  }, [product]);

  return (
    <>
      <ProductContext.Provider
        value={{ quantity, setQuantity, options, variant, selectVariant }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
}

export const useProduct = () => {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error("useProductStore must be used inside ProductStore");
  return ctx;
};
