import React from "react";
import { db } from "@/lib/db";

export async function updateUserCart({
  userId,
  cartId,
}: {
  userId: string;
  cartId: string;
}) {
  const exist = await db.userCart.findUnique({
    where: {
      userId,
    },
  });
  if (exist) {
    await db.userCart.update({
      where: {
        userId,
      },
      data: {
        cartId,
      },
    });

    return;
  }
  await db.userCart.create({
    data: {
      userId,
      cartId,
    },
  });
  return;
}
