import React from "react";
import LoginForm from "./form";
import Link from "next/link";
export default function Login() {
  return (
    <div className="flex gap-10 flex-col   w-full md:w-[600px]">
      <div className="">
        <h2 className="text-[3rem] font-bold font-editorial">Login</h2>
        <p className="text-[1.2rem] font-area">
          Continue with login into your account
        </p>
      </div>
      <LoginForm></LoginForm>
      <div className="flex flex-col text-[0.85rem] gap-4">
        <Link href={"/auth/signup"} className="font-area ">
          Don't have an Account! <strong>Click here</strong>
        </Link>
      </div>
    </div>
  );
}
