import { configureStore } from '@reduxjs/toolkit';
import nftsReducer from '../retrieveContract/contractSlice';

const store = configureStore({
  reducer: {
    nfts: nftsReducer
  }
});

export default store;