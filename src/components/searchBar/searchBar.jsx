import React, { useContext, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import SearchInput from "../searchInput/SearchInput";
import { fetchWallet } from "../../data/retrieveWallet/walletSlice";
import { fetchNFTs } from "../../data/retrieveContract/contractSlice";
import { InputContext } from "../../inputContext/inputContext";
import ApiModal from "../apiModal/apiModal";

const SearchBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    nftSearch,
    handleNftSearchChange,
    walletSearch,
    handleWalletSearchChange,
    chain,
    handleChainChange,
    handleAddressChange,
    address,
  } = useContext(InputContext);

  const dispatch = useDispatch();
  const page = useRef(1);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClick = () => {
    const nftportApi = localStorage.getItem("nftportApi");

    if (nftportApi) {
      // The "nftportApi" is not empty, proceed with the action
      if (address === "nfts" && nftSearch) {
        dispatch(fetchNFTs([nftSearch, page.current, chain, address]));
      } else {
        dispatch(fetchWallet([walletSearch, chain, address]));
      }
    } else {
      toast.info("Please add your API key!");
      setIsModalOpen(true);
    }
  };
  return (
    <div className="flex justify-center m-8 lg:hidden gap-4 flex-col md:flex-row md:gap-5">
      <div className="form-control">
        {address === "nfts" && (
          <SearchInput searchTerm={nftSearch} handleChnage={handleNftSearchChange} />
        )}
        {address === "accounts" && (
          <SearchInput searchTerm={walletSearch} handleChnage={handleWalletSearchChange} />
        )}
      </div>
      <select
        className="select select-bordered w-43 bg-slate-20"
        value={address}
        onChange={handleAddressChange}
      >
        <option value="" disabled>
          Address
        </option>
        <option value="nfts">Contract Address</option>
        <option value="accounts">Account/Wallet Address</option>
      </select>

      <select
        className="select select-bordered w-43 bg-slate-20"
        value={chain}
        onChange={handleChainChange}
      >
        <option value="" disabled>
          Chain
        </option>
        <option value="ethereum">Ethereum</option>
        <option value="polygon">Polygon</option>
      </select>

      <button
        type="button"
        className="btn"
        disabled={!(chain && address && (address === "nfts" ? nftSearch : walletSearch))}
        onClick={onClick}
      >
        Search
      </button>
      {isModalOpen && <ApiModal closeModal={closeModal} />}
    </div>
  );
};

export default SearchBar;
