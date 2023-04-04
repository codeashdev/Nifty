import React, { useContext, useRef } from "react";
import { useDispatch } from "react-redux";

import logo from "../../assets/logo.png";
import SearchInput from "../searchInput/SearchInput";
import { fetchWallet } from "../../data/retrieveWallet/walletSlice";
import { fetchNFTs } from "../../data/retrieveContract/contractSlice";
import { InputContext } from "../../inputContext/inputContext";

const Navbar = () => {
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

  const onClick = () => {
    if (address === "nfts" && nftSearch) {
      dispatch(fetchNFTs([nftSearch, page.current, chain, address]));
    } else {
      dispatch(fetchWallet([walletSearch, chain, address]));
    }
  };

  return (
    <div className="navbar bg-slate-200">
      <div className="flex-1 gap-4">
        <span className="normal-case text-xl">
          <img src={logo} alt="logo" className="h-14" />
        </span>
        <div className="form-control hidden lg:block">
          {address === "nfts" && (
            <SearchInput
              className="hidden lg:block"
              searchTerm={nftSearch}
              handleChnage={handleNftSearchChange}
            />
          )}
          {address === "accounts" && (
            <SearchInput
              className="hidden lg:block"
              searchTerm={walletSearch}
              handleChnage={handleWalletSearchChange}
            />
          )}
        </div>
        <select
          className="select select-bordered w-43 bg-slate-20 hidden lg:block"
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
          className="select select-bordered w-43 bg-slate-20 hidden lg:block"
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
          className="btn hidden lg:block"
          disabled={!(chain && address && (address === "nfts" ? nftSearch : walletSearch))}
          onClick={onClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
