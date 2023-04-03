import React, {
  createContext, useState, useMemo, useCallback,
} from "react";

// Create a context
export const InputContext = createContext();

// Create a context provider component
export function InputProvider({ children }) {
  const [search, setSearch] = useState("");
  const [address, setAddress] = useState("");
  const [chain, setChain] = useState("");

  const handleSearchChange = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const handleAddressChange = useCallback((event) => {
    setAddress(event.target.value);
  }, []);

  const handleChainChange = useCallback((event) => {
    setChain(event.target.value);
  }, []);

  const contextValues = useMemo(() => ({
    search,
    handleSearchChange,
    address,
    handleAddressChange,
    chain,
    handleChainChange,
  }), [search, handleSearchChange, address, handleAddressChange, chain, handleChainChange]);

  return (
    <InputContext.Provider value={contextValues}>
      {children}
    </InputContext.Provider>
  );
}
