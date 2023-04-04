import React from "react";

const SearchInput = ({ searchTerm, handleChnage }) => (
  <input
    type="text"
    value={searchTerm}
    placeholder="Search"
    className="input input-bordered bg-slate-50"
    onChange={handleChnage}
  />
);

export default SearchInput;
