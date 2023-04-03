import React from "react";
import Spinner from "../spinner/Spinner";

export const renderStatus = (status, errorMessage) => {
  if (status === "loading") {
    return <Spinner />;
  } if (status === "failed") {
    return <p>{errorMessage}</p>;
  }
  return null;
};
