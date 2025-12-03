import Link from "next/link";
import React, { useState, useEffect } from "react";
import SearchForm from "./form";
import MenuHeader from "../menu/header";
import SearchIcon from "../icons/search";
import Colors from "./colors";
import Popular from "./popular";
import Trends from "./trends";
import Features from "./features";
export default function MobileSearch() {
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
      <SearchIcon
        className=" block lg:hidden w-5 h-5 xs:w-7 xs:h-7"
        onClick={() => toggle((val) => !val)}
      ></SearchIcon>
      <aside
        className={`block lg:hidden fixed transition-all duration-200 top-0 left-0 bg-green shadow-2xl w-full z-[1000] overflow-hidden  ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="w-full  flex flex-col items-start h-screen">
          <MenuHeader close={toggle}></MenuHeader>
          <div className="flex-1 w-full max-w-[90%]  min-[550px]:max-w-[80%] mx-auto mt-4 overflow-y-auto no-scrollbar">
            <SearchForm toggle={toggle}></SearchForm>
            <div className="my-5 flex flex-col gap-5">
              <Trends onClick={toggle} />
              <Popular onClick={toggle} />
              <Colors onClick={toggle} />
              <Features onClick={toggle}></Features>
            </div>
            <div className=" py-4 flex flex-col gap-1 cursor-pointer">
              <Link href="/contact" className=" font-bold font-area">
                Contact Us
              </Link>
              <Link href="/faq" className=" font-bold font-area">
                Help
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
