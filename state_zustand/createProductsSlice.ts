import shirtimg from '../assets/shirt.png';
import hoodieimg from '../assets/hoodie.png';
import capimg from '../assets/cap.png';

export const createProductsSlice = (set: any, get: any) => ({
  inventory: [
    {
      id: 1,
      title: "Black t-shirt",
      description: "Unisex Basic softstyle T-Shirt",
      image: shirtimg,
      price: 7.95,
      stock: [{ s: 10 }, { m: 20 }, { l: 15 }, { xl: 30 }],
    },

    {
      id: 2,
      title: "Black hoodie",
      description: "Unisex Basic HeayWeight Black Hoodie",
      image: hoodieimg,
      price: 13,
      stock: [{ s: 10 }, { m: 20 }, { l: 15 }, { xl: 30 }],
    },
    {
      id: 3,
      title: "Black cap",
      description: "Unisex Basic Cap",
      image: capimg,
      price: 23,
      stock: [{ s: 10 }, { m: 20 }, { l: 15 }, { xl: 30 }],
    },
  ],
  cart:[],
  setCartItem: (item:any) => {
    // logica

    // set({
    //   standarTradePrice: data,
    // });
  },

  removeFav: (token:any) => {
    const favFilter = get().favTokens?.filter(
      (el:any) => el.symbol !== token.symbol
    );
    console.log(favFilter);
  },
});
