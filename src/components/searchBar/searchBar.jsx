import React, { useContext, useRef } from "react"
import { useDispatch } from "react-redux";

import { fetchNFTs } from "../../data/retrieveContract/contractSlice";
import { InputContext } from "../../inputContext/inputContext";

const SearchBar = () => {
  const { search, handleSearchChange, chain, handleChainChange } = useContext(InputContext);

  const dispatch = useDispatch();
  const page = useRef(1);
  const onClick = () => {
    dispatch(fetchNFTs([search, page.current, chain]));
  }
  return (
    <>
   <div className="flex flex-row justify-center m-8 lg:hidden gap-4 flex-col md:flex-row md:gap-5">
  <div className="form-control">
    <input type="text" value={search} placeholder="Search" className="input input-bordered bg-slate-50" onChange={handleSearchChange} />
  </div>
  <select className="select select-bordered w-43 bg-slate-20">
    <option>Contract Address</option>
    <option>Account/Wallet Address</option>
  </select>

  <select className="select select-bordered w-43 bg-slate-20" value={chain} onChange={handleChainChange}>
      <option value="" disabled>Chain</option>
      <option value="ethereum">Ethereum</option>
      <option value="polygon">Polygon</option>
</select>

{!(chain && search) ? (
  <button className="btn" disabled>Search</button>
) : (
  <button className="btn" onClick={onClick}>Search</button>
)}
  
</div>

  </>
  )
}

export default SearchBar;
