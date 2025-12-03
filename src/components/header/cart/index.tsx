import React, { useEffect } from "react";
import { useCartStore } from "@/store/cart.store";
import { useCart } from "@/provider/cart.provider";
import CartGrid from "./grid";
import Loading from "./loading";
import Empty from "./empty";
import Checkout from "./checkout";
import { X } from "lucide-react";
import CartIcon from "../icons/cart";
export default function Cart() {
  const { open, setOpen: toggle } = useCart();
  const { cart } = useCartStore();

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
      <span className="relative cursor-pointer">
        <CartIcon
          className=" w-5 h-5 xs:w-7 xs:h-7"
          onClick={() => toggle((val) => !val)}
        ></CartIcon>
        {!cart || cart.lines.length === 0 ? (
          <></>
        ) : (
          <>
            <span className="absolute -top-3 -right-2 bg-yellow-500 w-4 h-4 rounded-full flex items-center justify-center text-[0.6rem] text-white font-semibold">
              {cart.lines.length === 0 ? "" : cart.lines.length}
            </span>
          </>
        )}
      </span>
      <aside
        className={` fixed transition-all duration-200 top-0 right-0  h-screen z-[1000] overflow-hidden  ${
          open ? "max-w-[450px]" : "max-w-0"
        }`}
      >
        <div className="w-72 sm:w-[350px] lg:w-[450px] bg-white shadow-2xl flex flex-col  items-start h-full p-4">
          <div className="my-2 flex justify-between items-center w-full ">
            <h2 className="text-[0.75rem] xs:text-[1rem] md:text-[1.2rem] font-semibold font-area ">
              Cart ({!cart ? "0" : cart.lines.length})
            </h2>
            <X className="w-4 h-4" onClick={() => toggle(false)}></X>
          </div>
          {!cart ? (
            <Loading />
          ) : (
            <>
              {cart.lines.length === 0 ? (
                <Empty />
              ) : (
                <>
                  <CartGrid {...cart}></CartGrid>
                </>
              )}
            </>
          )}
          <Checkout></Checkout>
        </div>
      </aside>
      <div
        onClick={() => toggle(false)}
        className={`
          ${open ? "fixed" : "hidden"}
     
         bg-[#00000050] absolute top-0 left-0 z-[999] h-screen w-screen
        `}
      ></div>
    </>
  );
}
