// import { wixClient } from "@/context/WixContext";
// import { currentCart } from "@wix/ecom";
// import { create } from "zustand";

// type CartState = {
//   cart: currentCart.Cart | null;
//   isLoading: boolean;
//   counter: number;
//   getCart: (wixClient: wixClient) => void;
//   addItem: (
//     wixClient: wixClient,
//     productId: string,
//     variantId: string,
//     quantity: number
//   ) => void;
//   removeItem: (wixClient: wixClient, itemId: string) => void;
// };

// export const useCartStore = create<CartState>((set) => ({
//   cart: null,
//   isLoading: true,
//   counter: 0,
//   getCart: async (wixClient) => {
//     try {
//       const cart = await wixClient.currentCart.getCurrentCart();
//       set({
//         cart: cart || null,
//         isLoading: false,
//         counter: cart?.lineItems.length || 0,
//       });
//     } catch (error) {
//       if (error.code === 'OWNED_CART_NOT_FOUND') {
//         // Handle cart not found by creating a new cart
//         const newCart = await wixClient.currentCart.createCart();
//         set({
//           cart: newCart,
//           isLoading: false,
//           counter: 0,
//         });
//       } else {
//         console.error("Failed to get cart:", error);
//         set({ isLoading: false });
//       }
//     }
//   },
//   addItem: async (wixClient, productId, variantId, quantity) => {
//     set((state) => ({ ...state, isLoading: true }));
//     try {
//       const response = await wixClient.currentCart.addToCurrentCart({
//         lineItems: [
//           {
//             catalogReference: {
//               appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
//               catalogItemId: productId,
//               ...(variantId && { options: { variantId } }),
//             },
//             quantity: quantity > 0 ? quantity : 1,
//           },
//         ],
//       });
//       set({
//         cart: response.cart,
//         counter: response.cart?.lineItems.length,
//         isLoading: false,
//       });
//     } catch (error) {
//       console.error("Failed to add item to cart:", error);
//       set({ isLoading: false });
//     }
//   },
//   removeItem: async (wixClient, itemId) => {
//     set((state) => ({ ...state, isLoading: true }));
//     try {
//       const response = await wixClient.currentCart.removeLineItemsFromCurrentCart(
//         [itemId]
//       );
//       set({
//         cart: response.cart,
//         counter: response.cart?.lineItems.length,
//         isLoading: false,
//       });
//     } catch (error) {
//       console.error("Failed to remove item from cart:", error);
//       set({ isLoading: false });
//     }
//   },
// }));

import { wixClient } from "@/context/WixContext";
import { currentCart } from "@wix/ecom";
import { create } from "zustand";

type CartState = {
  cart: currentCart.Cart;
  isLoading: boolean;
  counter: number;
  getCart: (wixClient: wixClient ) => void;
  addItem: (
    wixClient: wixClient,
    productId: string,
    variantId: string,
    quantity: number
  ) => void;
  removeItem: (wixClient: wixClient, itemId: string) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  isLoading: true,
  counter: 0,
  getCart: async (wixClient) => {
    const cart = await wixClient.currentCart.getCurrentCart();
    set({
      cart: (cart || []),
      isLoading: false,
      counter: cart?.lineItems.length || 0});
   },
   addItem: async (wixClient, productId, variantId, quantity) => {
    set((state) => ({ ...state, isLoading: true }));
    const response = await wixClient.currentCart.addToCurrentCart({
      lineItems: [
        {
          catalogReference: {
            appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
            catalogItemId: productId,
            ...(variantId && { options: { variantId } }),
          },
          quantity: quantity,
        },
      ],
    });

    set({
      cart: response.cart,
      counter: response.cart?.lineItems.length,
      isLoading: false,
    });
  },
   removeItem: async (wixClient, itemId) => {
    set((state) => ({ ...state, isLoading: true }));
    const response = await wixClient.currentCart.removeLineItemsFromCurrentCart(
      [itemId]
    );
    set({
      cart: response.cart,
      counter: response.cart?.lineItems.length,
      isLoading: false,
    });
  },
}));
