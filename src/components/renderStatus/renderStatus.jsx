import Spinner from "../spinner/Spinner";
export const renderStatus = (status, errorMessage) => {
  if (status === "loading") {
    return <Spinner />;
  } else if (status === "failed") {
    return <p>{errorMessage}</p>;
  } else {
    return null;
  }
};
