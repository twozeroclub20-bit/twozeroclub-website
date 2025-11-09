import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search, User, ShoppingCart, MenuIcon } from "lucide-react";
import MenuHeader from "./header";
import WallDecor from "./wallDecor";
import Tech from "./techAccessories";
import Clothing from "./clothing";
import HomeLiving from "./homeLiving";
import { Accordion } from "@/components/ui/accordion";
import ShopByFeature from "./shopByFeature";
export default function Menu() {
  const [open, toggle] = useState(false);
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
  return (
    <>
      <MenuIcon
        className=" block lg:hidden w-5 h-5 xs:w-7 xs:h-7"
        onClick={() => toggle((val) => !val)}
      ></MenuIcon>
      <aside
        className={`block lg:hidden fixed transition-all duration-200 top-0 left-0 bg-green shadow-2xl w-full z-[1000] overflow-hidden  ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="w-full  flex flex-col items-start h-screen">
          <MenuHeader close={toggle}></MenuHeader>
          <div className="flex-1 w-full max-w-72  min-[350px]:max-w-[80%] xs:w-[75%] mx-auto mt-4 overflow-y-auto no-scrollbar">
            <Accordion type="multiple" className="w-full flex-1">
              <WallDecor close={toggle}></WallDecor>
              <HomeLiving close={toggle}></HomeLiving>
              <Tech close={toggle}></Tech>
              <Clothing close={toggle}></Clothing>
            </Accordion>
            <ShopByFeature close={toggle}></ShopByFeature>
          </div>
        </div>
      </aside>
    </>
  );
}
