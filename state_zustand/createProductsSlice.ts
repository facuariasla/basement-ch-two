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
  totalPrice:0,
  setCartItem: (item: InventoryItem) => {
    set({
      cart: {
        ...get().cart,
        [item.id]: (get().cart[item.id] || 0) + 1,
      },
    });
    // console.log("cart: ", get().cart);

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
      cartDetails: array,
    });

    // console.log(get().cartDetails);
  },
  removeCartItem: (item: any) => {
    const copy = { ...get().cart };
    if (copy[item.id] === 1) {
      delete copy[item.id];
      set({
        cart: copy,
      });
    } else {
      set({
        cart: { ...copy, [item.id]: copy[item.id] - 1 },
      });
    }
  },
  setTotalPrice: () => {
    let total = get().cartDetails.reduce(
      (acc: any, el: any) => acc + el.price * get().cart[el.id],
      0
    );
    set({
      totalPrice: total
    })
    // console.log(total);
  },
  setCartQuantity: () => {
    let cartArr = Object.values(get().cart);
    let newQuant = cartArr.reduce((acc:any, el:any) => acc + el, 0)
    // console.log(newQuant)
    set({
      cartQuantity: newQuant
    })
  },
});
