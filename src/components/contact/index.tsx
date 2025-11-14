import React from "react";
import ContactForm from "./form";
export default function Contact() {
  return (
    <div className="max-w-[1000px] w-full  xl:w-[60%]  m-auto flex flex-col lg:flex-row gap-4 sm:gap-10">
      <div className="flex flex-col flex-1 ">
        <h2 className="text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-[editorial] mb-0 sm:mb-5">
          Contact Us
        </h2>
        <ContactForm></ContactForm>
      </div>
      <div className="flex flex-col w-auto max-w-[300px] md:max-w-[280px] gap-4 sm:gap-20">
        <div>
          <h2 className=" text-[1.8rem] md:text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-[editorial] mb-0 sm:mb-5">
            Address
          </h2>
          <p className="font-[area] font-extrabold">
            Two Zero Club, 2509, 125 Peter St. Toronto, ON M5V 0M2 Canada
          </p>
        </div>

        <div>
          <h2 className=" text-[1.8rem] md:text-[2rem] sm:text-[2.25rem] lg:text-[2.75rem] font-[editorial] mb-0 sm:mb-5">
            Email
          </h2>
          <p className="font-[area]">
            If {"you’re"} enquiring any problems not listed in the contact us
            form or need urgent assistance regarding an order, please reach out
            to us at:
            <br />
            <br className="hidden sm:block" />
            <strong>twozeroclub@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
