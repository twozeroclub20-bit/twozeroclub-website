"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProduct } from "@/provider/product.provider";

export default function Variant() {
  const { options, selectVariant } = useProduct();
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});
  useEffect(() => {
    if (!options || options.length === 0) return;
    if (Object.keys(selectedOptions).length > 0) return;

    const initial: Record<string, string> = {};
    options.forEach((opt) => {
      initial[opt.name] = opt.values[0];
    });
    setSelectedOptions(initial);
  }, [options, selectedOptions]);
  useEffect(() => {
    if (!options || options.length === 0) return;

    const formatted = options.map((opt) => ({
      name: opt.name,
      value: selectedOptions[opt.name] ?? opt.values[0],
    }));

    selectVariant(formatted);
  }, [options, selectedOptions, selectVariant]);

  const handleChange = (name: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-2 mt-0 sm:mt-2">
      {options.map((ele) => (
        <div key={ele.name}>
          <h4 className="font-[area] font-semibold text-[12px] sm:text-[0.875rem] text-black/50 uppercase sm:mb-1">
            {ele.name}
          </h4>

          <Select
            onValueChange={(val) => handleChange(ele.name, val)}
            value={selectedOptions[ele.name] ?? ele.values[0]}
          >
            <SelectTrigger className="w-full  font-[area] border-1 !py-5 px-4 border-black rounded-full font-semibold text-[1rem] sm:text-[1.125rem]">
              <SelectValue />
            </SelectTrigger>

            <SelectContent className="max-h-56 rounded-2xl border-black">
              {ele.values.map((option) => (
                <SelectItem
                  key={option}
                  className="font-semibold text-[1rem] sm:text-[1.125rem] font-[area]"
                  value={option}
                >
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
