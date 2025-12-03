import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import List from "@/components/common/list";
export default function Features({
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
    <>
      <div className=" w-full   border-r-1 border-b-1 pb-4 lg:pb-0 lg:pr-2 pr-0  border-b-black/50 border-r-transparent lg:border-b-transparent lg:border-r-black/50 ">
        <h2 className="text-[1.4rem] font-area font-bold mb-5">
          Shop by Features
        </h2>
        <div className="pl-0 font-area cursor-pointer flex flex-col">
          <List>
            <Link
              href="#"
              onClick={() => handleClick("New")}
              className="text-[1rem] font-area "
            >
              New
            </Link>
          </List>
          <List>
            <Link
              href="#"
              onClick={() => handleClick("Trending")}
              className="text-[1rem] font-area "
            >
              Trending
            </Link>
          </List>

          <List>
            <Link
              href="#"
              onClick={() => handleClick("BestSellers")}
              className="text-[1rem] font-area "
            >
              BestSellers
            </Link>
          </List>
          <List>
            <Link
              href="#"
              onClick={() => handleClick("As seen on Social")}
              className="text-[1rem] font-area "
            >
              As seen on Social
            </Link>
          </List>
        </div>
      </div>
    </>
  );
}
