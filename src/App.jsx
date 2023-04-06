import React, { useContext } from "react";
import { useSelector } from "react-redux";

import { InputContext } from "./inputContext/inputContext";

import {
  selectContract,
  selectNFTs,
  selectNFTsStatus,
  selectNFTsError,
  selectNFTsCount,
} from "./data/retrieveContract/contractSlice";

import {
  selectWallet,
  selectWalletStatus,
  selectWalletError,
  selectWalletCount,
} from "./data/retrieveWallet/walletSlice";

import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/searchBar/searchBar";
import { renderContent } from "./components/renderContent/renderContent";

const App = () => {
  const { address, nftSearch, walletSearch } = useContext(InputContext);

  const contract = useSelector(selectContract);
  const nfts = useSelector(selectNFTs);
  const statusNFT = useSelector(selectNFTsStatus);
  const errorNFT = useSelector(selectNFTsError);
  const countNFT = useSelector(selectNFTsCount);

  const wallet = useSelector(selectWallet);
  const errorWallet = useSelector(selectWalletError);
  const statusWallet = useSelector(selectWalletStatus);
  const countWallet = useSelector(selectWalletCount);

  // console.log(wallet);

  return (
    <>
      <Navbar />
      <SearchBar />
      {renderContent(
        address,
        nftSearch,
        contract,
        nfts,
        statusNFT,
        errorNFT,
        countNFT,
        wallet,
        errorWallet,
        statusWallet,
        countWallet,
        walletSearch
      )}
    </>
  );
};

export default App;
