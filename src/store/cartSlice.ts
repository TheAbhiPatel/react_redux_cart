import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../components/Products";

// const localCart: IProduct[] =
//   localStorage.getItem("cartItems") !== null
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [];

const saveCart = (items: IProduct[]) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

const cartItemData = localStorage.getItem("cartItems");

const initialState: IProduct[] =
  cartItemData !== null ? JSON.parse(cartItemData) : [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const isAlreadyThere = state.find(
        (item) => item.id === action.payload.id
      );
      let prevQty = isAlreadyThere?.quantity;
      if (isAlreadyThere && prevQty) {
        const newState = state.filter((item) => item.id !== action.payload.id);
        return [{ ...isAlreadyThere, quantity: prevQty + 1 }, ...newState];
      } else {
        return [...state, { ...action.payload, timestamp: Date.now() }];
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    decQty(state, action) {
      const findItem = state.find((item) => item.id === action.payload.id);
      let prevQty = findItem?.quantity;
      if (findItem && prevQty) {
        const newState = state.filter((item) => item.id !== action.payload.id);
        return [...newState, { ...action.payload, quantity: prevQty - 1 }];
      } else {
        return state;
      }
    },
    saveForLater(state, action) {},
  },
});

export const { add, remove, decQty } = cartSlice.actions;
export default cartSlice.reducer;
