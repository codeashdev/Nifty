import { configureStore } from "@reduxjs/toolkit";

import walletReducer from "../retrieveWallet/walletSlice";
import nftsReducer from "../retrieveContract/contractSlice";

const store = configureStore({
  reducer: {
    nfts: nftsReducer,
    wallet: walletReducer,
  },
});

export default store;
