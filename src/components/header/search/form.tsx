import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import SearchIcon from "../icons/search";
import { Button } from "@/components/ui/button";
export default function SearchForm({
  toggle,
}: {
  toggle: (val: boolean) => void;
}) {
  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const q = formData.get("q");
    router.push(`/search?q=${q}`);
    toggle(false);
  };

  return (
    <div className="flex items-center justify-between w-full gap-2">
      <form onSubmit={onSubmit} className="flex items-center  gap-2 flex-1">
        <SearchIcon className="w-5 h-5" />
        <input
          name="q"
          required
          className="font-area bg-black/5 !px-3 rounded-[12px] p-2 w-full placeholder:font-area focus-within:ring-0 focus-within:outline-none "
          placeholder="Search Two Zero Club"
        />
        <Button>
          <ArrowRight></ArrowRight>
        </Button>
      </form>
    </div>
  );
}
