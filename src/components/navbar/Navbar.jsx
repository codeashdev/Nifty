import React, { useContext, useRef } from "react"
import { useDispatch } from "react-redux";

import logo from "../../assets/logo.png"

import { fetchNFTs } from "../../data/retrieveContract/contractSlice";
import { InputContext } from "../../inputContext/inputContext"

const Navbar = () => {

  const { search, handleSearchChange, chain, handleChainChange } = useContext(InputContext);

  const dispatch = useDispatch();
  const page = useRef(1);
  const onClick = () => {
    dispatch(fetchNFTs([search, page.current, chain]));
  }
  return (
    <div className="navbar bg-slate-200">
      <div className="flex-1 gap-4">
        <span className="normal-case text-xl"><img src={logo} alt="logo" className="h-14" /></span>
        <div className="form-control hidden lg:block">
          <input type="text" value={search} placeholder="Search" className="input input-bordered bg-slate-50" onChange={handleSearchChange} />
         </div>

        <select className="hidden lg:block select w-43 bg-slate-20">
          <option>Contract Address</option>
          <option>Account/Wallet Address</option>
        </select>

        <select className="select select-bordered w-43 bg-slate-20 hidden lg:block" value={chain} onChange={handleChainChange}>
          <option value="" disabled>Chain</option>
          <option value="ethereum">Ethereum</option>
          <option value="polygon">Polygon</option>
        </select>

        {!(chain && search) ? (
              <button className="btn hidden lg:block" disabled>Search</button>
            ) : (
              <button className="btn hidden lg:block" onClick={onClick}>Search</button>
            )}
      </div>
    </div>
  )
}

export default Navbar;
