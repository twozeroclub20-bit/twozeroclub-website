"use client";

import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface CartProviderInterface {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  updating: boolean;
  setUpdating: Dispatch<SetStateAction<boolean>>;
}

const CartContext = createContext<CartProviderInterface | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [updating, setUpdating] = useState(false);
  return (
    <>
      <CartContext.Provider value={{ updating, setUpdating, open, setOpen }}>
        {children}
      </CartContext.Provider>
    </>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCartStore must be used inside CartStore");
  return ctx;
};
