import React, { useContext, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import logo from "../../assets/logo.png";
import settingsLogo from "../../assets/icons8-settings.svg";
import SearchInput from "../searchInput/SearchInput";
import { fetchWallet } from "../../data/retrieveWallet/walletSlice";
import { fetchNFTs } from "../../data/retrieveContract/contractSlice";
import { InputContext } from "../../inputContext/inputContext";
import ApiModal from "../apiModal/apiModal";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            Select Address
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
            Select Chain
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
      <div onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
        <button
          type="button"
          className="rounded-full p-2 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring"
        >
          <img src={settingsLogo} alt="settingLog" className="w-9" />
        </button>
        {isDropdownOpen && (
        <div className="origin-top-right absolute top-12 right-4 mt-2 w-30 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">

          <button type="button" onClick={openModal} className="block px-4 py-4 text-md text-gray-700 hover:text-gray-900">
            Add API Key
          </button>
        </div>
        )}
      </div>
      {isModalOpen && <ApiModal closeModal={closeModal} />}
    </div>
  );
};

export default Navbar;
