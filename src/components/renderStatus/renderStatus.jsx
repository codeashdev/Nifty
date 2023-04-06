import React from "react";
import Spinner from "../spinner/Spinner";

const RenderStatus = (status, errorMessage) => {
  if (status === "loading") {
    return <Spinner />;
  }
  if (status === "failed") {
    return <p>{errorMessage}</p>;
  }
  return null;
};

export default RenderStatus;
