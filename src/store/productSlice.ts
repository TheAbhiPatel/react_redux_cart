import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../components/Products";

interface IInitialState {
  data: IProduct[];
  status: "LOADING" | "IDLE" | "ERROR";
}

const initialState: IInitialState = {
  data: [],
  status: "LOADING",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    /** --- if we use normal fetching method --- */
    // setProduct(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProdutcs.pending, (state) => {
        state.status = "LOADING";
      })
      .addCase(fetchProdutcs.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "IDLE";
      })
      .addCase(fetchProdutcs.rejected, (state) => {
        state.status = "ERROR";
      });
  },
});

// export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

/** --- fetching products by normal method --- */
// export function fetchProdutcs() {
//   return async function fetchProductThunk(dispatch, getState) {
//     try {
//       dispatch(setStatus("LOADING"));
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       dispatch(setProduct(data));
//       dispatch(setStatus("IDLE"));
//     } catch (error) {
//       dispatch(setStatus("ERROR"));
//       console.log("Error while fetching products ---> ", error);
//     }
//   };
// }

export const fetchProdutcs = createAsyncThunk("product/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});
