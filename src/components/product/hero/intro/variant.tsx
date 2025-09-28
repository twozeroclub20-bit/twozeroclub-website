"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/lib/shopify/types";
import { useProduct } from "@/provider/product.provider";

export default function Variant({ data }: { data: Product }) {
  const { options, selectVariant } = useProduct();
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});

  const handleChange = (name: string, value: string) => {
    const updated = { ...selectedOptions, [name]: value };
    setSelectedOptions(updated);

    const formatted = Object.entries(updated).map(([n, v]) => ({
      name: n,
      value: v,
    }));

    selectVariant(formatted);
  };

  return (
    <div className="space-y-4 mt-3">
      {options.map((ele) => (
        <div key={ele.name}>
          <h4 className="font-[area] text-[0.875rem] text-black/50 uppercase mb-1">
            {ele.name}
          </h4>

          <Select
            onValueChange={(val) => handleChange(ele.name, val)}
            value={selectedOptions[ele.name] ?? ""}
          >
            <SelectTrigger className="w-full border-1 py-1 border-black rounded-full">
              <SelectValue placeholder="Select here..." />
            </SelectTrigger>

            <SelectContent className="max-h-56 rounded-2xl border-black">
              {ele.values.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
    </div>
  );
}
