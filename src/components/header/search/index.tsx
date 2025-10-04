import React, { useState, useEffect, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
export default function Search() {
  const [open, toggle] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const q = formData.get("q");
    router.push(`/search?q=${q}`);
    toggle(false);
  };
  return (
    <>
      <SearchIcon
        className="w-5 h-5 xs:w-7 xs:h-7 cursor-pointer"
        onClick={() => toggle((val) => !val)}
      />
      <div
        className={`fixed rounded-2xl p-2 px-4 transition-all duration-200 ${
          open ? "top-10" : "-top-40"
        } left-1/2 -translate-x-1/2 bg-white shadow-2xl z-[1000] overflow-hidden w-[80%] min-w-[20rem]`}
      >
        <div className="flex items-center justify-between w-full gap-2">
          <form onSubmit={onSubmit} className="flex items-center  gap-2 flex-1">
            <SearchIcon />
            <input
              name="q"
              required
              className="font-[area] p-2 w-full placeholder:font-[area] focus-within:ring-0 focus-within:outline-none"
              placeholder="Search here..."
            />
          </form>
          <X className="cursor-pointer" onClick={() => toggle(false)} />
        </div>
      </div>
      <div
        onClick={() => toggle(false)}
        className={`${
          open ? "fixed" : "hidden"
        } bg-[#00000050] top-0 left-0 z-[999] h-screen w-screen`}
      />
    </>
  );
}
