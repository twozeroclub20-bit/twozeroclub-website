import React from "react";
import LoginForm from "./form";
import Link from "next/link";
export default function Signup() {
  return (
    <div className="flex gap-10 flex-col  w-full md:w-[600px]">
      <div className="">
        <h2 className="text-[3rem] font-bold font-editorial">Signup</h2>
        <p className="text-[1.2rem] font-area">Create a new account today</p>
      </div>
      <LoginForm></LoginForm>
      <div className="flex flex-col text-[0.85rem] gap-4">
        <Link href={"/auth/login"} className="font-area ">
          Already have an Account! <strong>Click here</strong>
        </Link>
      </div>
    </div>
  );
}
