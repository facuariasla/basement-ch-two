import shirtimg from "../assets/shirt.png";
import hoodieimg from "../assets/hoodie.png";
import capimg from "../assets/cap.png";
import { InventoryItem } from "./types";

export const createProductsSlice = (set: any, get: any) => ({
  inventory: [
    {
      id: "shirt-041",
      title: "Black t-shirt",
      description: "Unisex Basic softstyle T-Shirt",
      image: shirtimg,
      price: 7.95,
      stock: [{ s: 10 }, { m: 20 }, { l: 15 }, { xl: 100 }],
    },
    {
      id: "hoodie-2314",
      title: "Black hoodie",
      description: "Unisex Basic HeayWeight Black Hoodie",
      image: hoodieimg,
      price: 13,
      stock: [{ s: 10 }, { m: 20 }, { l: 15 }, { xl: 100 }],
    },
    {
      id: "cap-21452",
      title: "Black cap",
      description: "Unisex Basic Cap",
      image: capimg,
      price: 23,
      stock: [{ s: 10 }, { m: 20 }, { l: 15 }, { xl: 100 }],
    },
  ],
  cart: {},
  cartQuantity: 0,
  cartDetails: [],
  setCartItem: (item: InventoryItem) => {
    set({
      cart: {
        ...get().cart,
        [item.id]: (get().cart[item.id] || 0) + 1,
      },
    });
    console.log("cart: ", get().cart);

    // Set cartQuantity
    const quant = Object.entries(get().cart).reduce(
      (acc: any, el: any) => acc + el[1],
      0
    );
    set({
      cartQuantity: quant,
    });
  },
  cleanCart: () => {
    set({
      cart: {},
    });
    set({
      cartQuantity: 0,
    });
  },
  setCartDetails: () => {
    let array = get().inventory.filter((a: any) =>
      Object.entries(get().cart).find((b: any) => b[0] == a.id)
    );
    set({
      cartDetails: array
    })

    
    console.log(get().cartDetails);
  },
});
