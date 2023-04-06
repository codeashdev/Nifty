import React from "react";

import RenderStatus from "../renderStatus/RenderStatus";

import ContractDetail from "../contractDetail/ContractDetail";
import ContentSection from "../contentSection/ContentSection";

import CardNFT from "../card/CardNFT";
import CardWallet from "../card/CardWallet";

export const renderContent = (
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
) => {
  switch (address) {
    case "nfts":
      if (!nftSearch) return null;

      return (
        <>
          <RenderStatus status={statusNFT} error={errorNFT} />
          {statusNFT === "succeeded" && (
            <>
              <ContractDetail contract={contract.contract} total={countNFT} />
              <ContentSection>
                {nfts.map(({ contract_address, token_id, ...nft }) => (
                  <CardNFT nft={nft} key={`${contract_address}-${token_id}`} />
                ))}
              </ContentSection>
            </>
          )}
        </>
      );

    case "accounts":
      if (!walletSearch) return null;

      return (
        <>
          <RenderStatus status={statusWallet} error={errorWallet} />
          {statusWallet === "succeeded" && (
            <>
              <div className="flex  justify-evenly items-center shadow-lg mx-2 md:mx-12 my-4 p-12">
                <h2 className="text-sm md:xl sm:text-2xl font-bold text-gray-900 italic">
                  Total number of NFTs:
                  {` ${countWallet}`}
                </h2>
              </div>
              <ContentSection>
                {wallet.map(({ contract_address, token_id, ...nft }) => (
                  <CardWallet nft={nft} key={`${contract_address}-${token_id}`} />
                ))}
              </ContentSection>
            </>
          )}
        </>
      );

    default:
      return null;
  }
};
