import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <>
      <Image
        className="max-w-[2000px] min-h-32 m-auto w-full"
        src="/images/banner.png"
        alt="banner"
        height="600"
        width="1000"
      ></Image>
    </>
  );
}
