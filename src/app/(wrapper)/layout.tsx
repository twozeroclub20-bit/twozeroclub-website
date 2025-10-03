import React, { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CartProvider } from "@/provider/cart.provider";
import { CustomerStore } from "@/store/customer.store";
import { CartStore } from "@/store/cart.store";
export default function layout({ children }: { children: ReactNode }) {
  return (
    <CustomerStore>
      <CartStore>
        <CartProvider>
          <main>
            <Header></Header>
            {children}

            <Footer></Footer>
          </main>
        </CartProvider>
      </CartStore>
    </CustomerStore>
  );
}
