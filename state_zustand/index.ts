import create from "zustand";
import { createProductsSlice } from "./createProductsSlice";
import { devtools } from "zustand/middleware";


const useStore = create(devtools((set, get) => ({
  ...createProductsSlice(set, get),
})));

export default useStore;
