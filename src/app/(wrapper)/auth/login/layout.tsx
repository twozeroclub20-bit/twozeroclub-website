import React, { ReactNode } from "react";
import Newsletter from "@/components/newsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Two Zero Club",
};
export default function layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
