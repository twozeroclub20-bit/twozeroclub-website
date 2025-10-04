import React, { ReactNode } from "react";
import Newsletter from "@/components/newsletter";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Newsletter></Newsletter>
    </>
  );
}
