import React, { createContext, useState, useMemo, useCallback } from "react";

// Create a context
export const InputContext = createContext();

// Create a context provider component
export const InputProvider = ({ children }) => {
  const [nftSearch, setNftSearch] = useState("");
  const [walletSearch, setWaletSearch] = useState("");
  const [address, setAddress] = useState("");
  const [chain, setChain] = useState("");
  const [apiKey, setApiKey] = useState("");

  const handleNftSearchChange = useCallback((event) => {
    setNftSearch(event.target.value);
  }, []);

  const handleWalletSearchChange = useCallback((event) => {
    setWaletSearch(event.target.value);
  }, []);

  const handleAddressChange = useCallback((event) => {
    setAddress(event.target.value);
  }, []);

  const handleChainChange = useCallback((event) => {
    setChain(event.target.value);
  }, []);
  const handleApiKeyChange = useCallback((event) => {
    setApiKey(event.target.value);
  }, []);
  const clearApikeyInput = useCallback(() => {
    setApiKey("");
  }, []);

  const contextValues = useMemo(
    () => ({
      nftSearch,
      handleNftSearchChange,
      walletSearch,
      handleWalletSearchChange,
      address,
      handleAddressChange,
      chain,
      handleChainChange,
      apiKey,
      handleApiKeyChange,
      clearApikeyInput,
    }),
    [
      nftSearch,
      handleNftSearchChange,
      walletSearch,
      handleWalletSearchChange,
      address,
      handleAddressChange,
      chain,
      handleChainChange,
      apiKey,
      handleApiKeyChange,
      clearApikeyInput,
    ]
  );

  return <InputContext.Provider value={contextValues}>{children}</InputContext.Provider>;
};
