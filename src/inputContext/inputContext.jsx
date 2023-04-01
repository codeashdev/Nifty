import React, { createContext, useState } from 'react';

// Create a context
export const InputContext = createContext();

// Create a context provider component
export const InputProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [address, setAddress] = useState("");
    const [chain, setChain] = useState("");
  
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };
  
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };
  
    const handleChainChange = (event) => {
        setChain(event.target.value);
    };
  
    
    const contextValues = {
        search,
        handleSearchChange,
        address,
        handleAddressChange,
        chain,
        handleChainChange
    };
  
    return (
      <InputContext.Provider value={contextValues}>
        {children}
      </InputContext.Provider>
    );
  };