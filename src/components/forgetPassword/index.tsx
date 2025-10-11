import React from "react";
import ForgetPasswordForm from "./form";
import Link from "next/link";
export default function ForgetPassword() {
  return (
    <div className="flex gap-10 flex-col   w-full md:w-[600px]">
      <div className="">
        <h2 className="text-[3rem] font-bold font-[editorial]">
          Forget Password
        </h2>
        <p className="text-[1.2rem] font-[area]">
          Please enter yout register email to continue
        </p>
      </div>
      <ForgetPasswordForm></ForgetPasswordForm>
      <div className="flex flex-col text-[0.85rem] gap-4">
        <Link href={"/auth/login"} className="font-[area] ">
          Back to Login! <strong>Click here</strong>
        </Link>
      </div>
    </div>
  );
}
