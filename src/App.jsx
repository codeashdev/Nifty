import React from "react";
import { useSelector } from "react-redux";

import {
  selectContract,
  selectNFTs,
  selectNFTsStatus,
  selectNFTsError,
  selectNFTsCount,
} from "./data/retrieveContract/contractSlice";

import Navbar from "./components/navbar/Navbar";
import ContentSection from "./components/contentSection/ContentSection";
import ContractDetail from "./components/contractDetail/ContractDetail";
import Card from "./components/card/Card";
import { renderStatus } from "./components/renderStatus/renderStatus";
import SearchBar from "./components/searchBar/searchBar";

function App() {
  const contract = useSelector(selectContract);
  const nfts = useSelector(selectNFTs);
  const status = useSelector(selectNFTsStatus);
  const error = useSelector(selectNFTsError);
  const count = useSelector(selectNFTsCount);

  return (
    <>
      <Navbar />
      <SearchBar />
      {renderStatus(status, error)}
      {status === "succeeded" && <ContractDetail contract={contract.contract} total={count} />}
      <ContentSection>
        {status === "succeeded" && nfts.map((nft) => <Card nft={nft} key={nft.token_id} />)}
      </ContentSection>
    </>
  );
}

export default App;
