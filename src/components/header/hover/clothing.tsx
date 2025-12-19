import React from "react";
import Image from "next/image";
import List from "../../common/list";
import StaticData from "@/assets/static/menu.static.json";
import { useRouter } from "next/navigation";
export default function Clothing() {
  const router = useRouter();
  function handleClick(tag: string) {
    const slug = tag + "-clothing";
    router.push("/collections/" + slug);
  }
  return (
    <>
      <div
        className="
      fixed top-20 z-[1000] left-1/2 -translate-x-1/2 w-[95svw] max-w-[1400px]
      bg-green shadow-sm p-10
      opacity-0 transition-opacity duration-300
      pointer-events-none
      peer-hover:opacity-100 peer-hover:pointer-events-auto
      group-hover:opacity-100 group-hover:pointer-events-auto rounded-bl-[1.5rem] rounded-br-[1.5rem]
    "
      >
        <div className=" w-full grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 min-h-96 gap-5 space-y-5">
          <div className="border-r border-black/50 ">
            <h2 className="text-[1.625rem] font-editorial mb-5">Featured</h2>
            <ul className="pl-0 font-area cursor-pointer">
              {StaticData.featured.map((item, index) => (
                <List
                  key={item.ticker + index}
                  onClick={() => handleClick(item.ticker)}
                >
                  {item.label}
                </List>
              ))}
            </ul>
          </div>

          <div className="border-r border-black/50 space-y-2 ">
            <h2 className="text-[1.625rem] font-editorial mb-5">Categories</h2>
            <h2 className="text-[14px] font-bold  font-area text-[#F33C14]">
              CLOTHING
            </h2>
            <ul className="pl-0 font-area cursor-pointer">
              <List onClick={() => handleClick("Hoodies")}>Hoodies</List>
              <List onClick={() => handleClick("Sweatshirts")}>
                Sweatshirts{" "}
              </List>
              <List onClick={() => handleClick("Short Sleeve Tees")}>
                Short Sleeve Tees
              </List>
              <List onClick={() => handleClick("Long Sleeve Tees")}>
                Long Sleeve Tees
              </List>
            </ul>
            <h2 className="text-[14px] font-bold  font-area text-[#08814E]">
              LIFESTYLE
            </h2>
            <ul className="pl-0 font-area cursor-pointer">
              <List onClick={() => handleClick("Beach Towels")}>
                Beach Towels
              </List>
              <List onClick={() => handleClick("Travel Mugs")}>
                Travel Mugs
              </List>
              <List onClick={() => handleClick("Water Bottles")}>
                Water Bottles
              </List>
              <List onClick={() => handleClick("Tote Bags")}>Tote Bags</List>
              <List onClick={() => handleClick("Pouches")}>Pouches</List>
            </ul>
          </div>

          <div className="border-r border-black/50 ">
            <h2 className="text-[1.625rem] font-editorial mb-5">
              Shop by Color
            </h2>
            <h2 className="text-[14px] font-bold text-[#064BD6] font-area mb-2">
              CLASSICS
            </h2>
            <div className="grid grid-cols-4 gap-1 mb-4  place-items-start justify-center w-48 cursor-pointer">
              {StaticData.classic.map((color, index) => (
                <div
                  onClick={() => handleClick(color.label)}
                  style={{ backgroundColor: color.color }}
                  key={color + "classic" + index}
                  className="w-full h-[30px] rounded-full"
                ></div>
              ))}
            </div>
            <h2 className="text-[14px] font-bold  font-area text-[#FF004F]  mb-2">
              TRENDING
            </h2>
            <div className="grid grid-cols-4 gap-1 mb-4 w-48 cursor-pointer">
              {StaticData.trending.map((color, index) => (
                <div
                  onClick={() => handleClick(color.label)}
                  style={{ backgroundColor: color.color }}
                  key={color + "trending" + index}
                  className="w-full h-[30px] rounded-full"
                ></div>
              ))}
            </div>
          </div>
          <div className="">
            <h2 className="text-[1.625rem] font-editorial mb-5">
              Shop by Subject
            </h2>
            <ul className="pl-0 font-area cursor-pointer">
              {StaticData.shop["clothing"].map((item, index) => (
                <List
                  key={item.ticker + index}
                  onClick={() => handleClick(item.ticker)}
                >
                  {item.label}
                </List>
              ))}
            </ul>
          </div>

          <div className="xl:block hidden">
            <Image
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="h-full max-h-[400px]  rounded-sm aspect-[3/4] pointer-events-none object-cover "
              src={"/images/hover/clothing.png"}
              alt="menu-image"
              width="400"
              height="1000"
            ></Image>
          </div>
        </div>
      </div>
      <div
        className="
    fixed top-0 left-0 h-full w-full
    bg-black/20 opacity-0 transition-opacity duration-300
    pointer-events-none
    peer-hover:opacity-100
    group-hover:opacity-100
  "
      ></div>
    </>
  );
}
