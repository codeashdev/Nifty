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
import ContentSection from "./components/contentSection/ContentSection";
import ContractDetail from "./components/contractDetail/ContractDetail";
import CardNFT from "./components/card/CardNFT";
import CardWallet from "./components/card/CardWallet";
import { renderStatus } from "./components/renderStatus/renderStatus";
import SearchBar from "./components/searchBar/searchBar";

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

  return (
    <>
      <Navbar />
      <SearchBar />
      {address === "nfts" && nftSearch && (
        <>
          {renderStatus(statusNFT, errorNFT)}
          {statusNFT === "succeeded" && (
            <ContractDetail contract={contract.contract} total={countNFT} />
          )}
          <ContentSection>
            {statusNFT === "succeeded" &&
              nfts.map((nft) => <CardNFT nft={nft} key={nft.token_id} />)}
          </ContentSection>
        </>
      )}
      {address === "accounts" && walletSearch && (
        <>
          {renderStatus(statusWallet, errorWallet)}
          <ContentSection>
            {statusWallet === "succeeded" &&
              wallet.map((nft) => <CardWallet nft={nft} key={nft.token_id} />)}
          </ContentSection>
        </>
      )}
    </>
  );
};

export default App;
