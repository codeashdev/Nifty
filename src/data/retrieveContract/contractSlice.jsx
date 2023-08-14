/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const fetchNFTs = createAsyncThunk(
  "nfts/fetchNFTs",
  async ([nftSearch, page, chain, address]) => {
    const options = {
      method: "GET",
      headers: { accept: "application/json", Authorization: localStorage.getItem("nftportApi") },
    };
    // const contractAdd = "0x364C828eE171616a39897688A831c2499aD972ec";
    // const chain = "ethereum";

    const response = await fetch(
      `https://api.nftport.xyz/v0/${address}/${nftSearch}?chain=${chain}&page_number=${page}&page_size=50&include=metadata&refresh_metadata=false`,
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

const nftsSlice = createSlice({
  name: "nfts",
  initialState: {
    nfts: [],
    total: 0,
    status: "idle",
    error: null,
    page: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNFTs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNFTs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.nfts = action.payload;
        // state.nfts = [...state.nfts.nfts.nfts, ...action.payload.nfts];
        state.total = action.payload.total;
      })
      .addCase(fetchNFTs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const selectContract = (state) => state.nfts.nfts;
export const selectNFTs = (state) => state.nfts.nfts.nfts;
export const selectNFTsStatus = (state) => state.nfts.status;
export const selectNFTsError = (state) => state.nfts.error;
export const selectNFTsCount = (state) => state.nfts.nfts.total;

export default nftsSlice.reducer;
