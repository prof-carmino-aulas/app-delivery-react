// src/core/stores/app.store.ts
// Objetivo: manter estado global inicial do aplicativo, incluindo carrinho e navegação guest-first.

import { create } from "zustand";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type AppStore = {
  cartItems: CartItem[];
  cartItemsCount: number;
  addCartItem: (item: Omit<CartItem, "quantity">) => void;
  clearCart: () => void;
};

export const useAppStore = create<AppStore>((set) => ({
  cartItems: [],
  cartItemsCount: 0,

  addCartItem: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        const updatedItems = state.cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );

        return {
          cartItems: updatedItems,
          cartItemsCount: updatedItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
          ),
        };
      }

      const updatedItems = [
        ...state.cartItems,
        {
          ...item,
          quantity: 1,
        },
      ];

      return {
        cartItems: updatedItems,
        cartItemsCount: updatedItems.reduce(
          (total, cartItem) => total + cartItem.quantity,
          0
        ),
      };
    }),

  clearCart: () =>
    set({
      cartItems: [],
      cartItemsCount: 0,
    }),
}));