import React from "react";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
function TabsList({
  children,
  label,
  active,
  toggle,
}: {
  children: ReactNode;
  label: string;
  active: string;
  toggle: (val: string) => void;
}) {
  const router = useRouter();

  return (
    <li
      onClick={() => {
        router.push(`/faq?tab=${label}`);
        toggle(label);
      }}
      className={`font-area cursor-pointer py-0.5 px-4 border rounded-full  text-[0.85rem] xl:text-[1.125rem] font-bold list-none box-border ${
        label === active ? " border-black " : " border-transparent"
      } `}
    >
      {children}
    </li>
  );
}

export default function Tabs({
  active,
  toggle,
}: {
  active: string;
  toggle: (val: string) => void;
}) {
  return (
    <div className="w-full ">
      <div className="gap-2 md:gap-10 items-center justify-between flex flex-wrap">
        <TabsList toggle={toggle} key="about" label="about" active={active}>
          About Us
        </TabsList>
        <TabsList toggle={toggle} key="order" label="order" active={active}>
          Order & Payment
        </TabsList>
        <TabsList
          toggle={toggle}
          key="shipping"
          label="shipping"
          active={active}
        >
          Shipping
        </TabsList>
        <TabsList toggle={toggle} key="general" label="general" active={active}>
          General
        </TabsList>
        <TabsList toggle={toggle} key="contact" label="contact" active={active}>
          Contact Us
        </TabsList>
      </div>
    </div>
  );
}
