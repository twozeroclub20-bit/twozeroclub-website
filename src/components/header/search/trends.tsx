import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import StaticData from "@/assets/static/home.static.json";
interface IPROPS {
  children: ReactNode;
  id: number;
  label: string;
  onClick: any;
}

const colors = [
  "#EB9501",
  "#F33C14",
  "#FDB306",
  "#064BD6",
  "#FE7E93",
  "#08814E",
  "#C1D329",
  "#B9B9F5",
  "#FE7E93",
];

function Card(data: IPROPS) {
  const router = useRouter();
  const handleClick = (label: string) => {
    router.push(`/search?q=${label}`);
    data.onClick(false);
  };
  return (
    <div
      className="px-2.5 py-1 text-[0.8rem]  rounded-full font-area text-white "
      style={{ backgroundColor: colors[data.id % 9] }}
      onClick={() => handleClick(data.label)}
    >
      {data.children}
    </div>
  );
}

export default function Trends({
  onClick,
}: {
  onClick: (val: boolean) => void;
}) {
  return (
    <div className=" w-full   border-r-1 border-b-1 pb-4 lg:pb-0 lg:pr-2 pr-0  border-b-black/50 border-r-transparent lg:border-b-transparent lg:border-r-black/50 ">
      <h2 className="text-[1.4rem] font-area font-bold mb-5">Shop by Trends</h2>
      <div className="flex gap-2 items-start flex-wrap">
        {StaticData.shopBy.map((ele, id) => (
          <Card onClick={onClick} key={id} label={ele} id={id}>
            {ele}
          </Card>
        ))}
      </div>
    </div>
  );
}
