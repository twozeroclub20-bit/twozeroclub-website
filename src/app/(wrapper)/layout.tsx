"use client";

import React, { ReactNode, Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CartProvider } from "@/provider/cart.provider";
import { CustomerStore } from "@/store/customer.store";
import { CartStore } from "@/store/cart.store";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomerStore>
        <CartStore>
          <CartProvider>
            <main>
              <Header />
              {children}
              <Footer />
            </main>
          </CartProvider>
        </CartStore>
      </CustomerStore>
    </Suspense>
  );
}
