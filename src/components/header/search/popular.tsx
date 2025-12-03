import React from "react";
import { useRouter } from "next/navigation";
import List from "@/components/common/list";
export default function Popular({
  onClick,
}: {
  onClick: (val: boolean) => void;
}) {
  const router = useRouter();
  const handleClick = (label: string) => {
    router.push(`/search?q=${label}`);
    onClick(false);
  };
  return (
    <div className=" w-full   border-r-1 border-b-1 pb-4 lg:pb-0 lg:pr-2 pr-0  border-b-black/50 border-r-transparent lg:border-b-transparent lg:border-r-black/50 ">
      <h2 className="text-[1.4rem] font-area font-bold mb-5">
        Popular Products
      </h2>
      <ul className="pl-0  font-area cursor-pointer">
        <List onClick={() => handleClick("Art Prints")}>Art Prints</List>
        <List onClick={() => handleClick("Framed Prints")}>Framed Prints</List>
        <List onClick={() => handleClick("Posters Wall")}>Posters Wall</List>
        <List onClick={() => handleClick("Phone Cases")}>Phone Cases </List>
        <List onClick={() => handleClick("T-Shirts")}>T-Shirts</List>
        <List onClick={() => handleClick("Hoodies")}>Hoodies</List>
        <List onClick={() => handleClick("Rugs")}>Rugs</List>
      </ul>
    </div>
  );
}
