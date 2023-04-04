/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const fetchWallet = createAsyncThunk(
  "wallet/fetchWallet",
  async ([walletSearch, chain, address]) => {
    const options = {
      method: "GET",
      headers: { accept: "application/json", Authorization: import.meta.env.VITE_NFTPORT_API_KEY },
    };
    // const contractAdd = "0xf5663d0eee3620c4a88e28e392aac72d077a8c4d";
    // const chain = "ethereum";

    const response = await fetch(
      `https://api.nftport.xyz/v0/${address}/${walletSearch}?chain=${chain}&page_size=50&include=metadata`,
      options
    );
    if (!response.ok) {
      toast.error(`Error fetching NFTs: ${response.status}`);
      throw new Error();
    }
    const data = await response.json();
    return data;
  }
);

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    wallet: [],
    total: 0,
    status: "idle",
    error: null,
    page: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWallet.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWallet.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.wallet = action.payload;
        state.total = action.payload.total;
      })
      .addCase(fetchWallet.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectWallet = (state) => state.wallet.wallet.nfts;
export const selectWalletStatus = (state) => state.wallet.status;
export const selectWalletError = (state) => state.wallet.error;
export const selectWalletCount = (state) => state.wallet.total;

export default walletSlice.reducer;
