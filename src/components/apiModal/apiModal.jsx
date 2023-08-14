import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

import { InputContext } from "../../inputContext/inputContext";

const ApiModal = ({ closeModal }) => {
  const { apiKey, handleApiKeyChange, clearApikeyInput } = useContext(InputContext);

  // Use state to track the local API key
  const [localApi, setLocalApi] = useState(localStorage.getItem("nftportApi"));

  useEffect(() => {
    // Update the localApi state when the API key changes
    setLocalApi(localStorage.getItem("nftportApi"));
  }, [apiKey]);

  const handleSave = () => {
    localStorage.setItem("nftportApi", apiKey);
    setLocalApi(apiKey); // Update the localApi state
    toast.success("API key saved successfully!");
  };

  const handleDelete = () => {
    localStorage.removeItem("nftportApi");
    setLocalApi(null); // Update the localApi state
    clearApikeyInput();
    toast.success("API key deleted successfully!");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
      <div className="bg-gray-100 p-4 m-4 rounded-lg max-w-2xl w-full h-80 relative">
        <button
          type="button"
          className="absolute top-2 right-2 text-lg text-gray-600 hover:text-gray-900"
          onClick={closeModal}
        >
          X
        </button>
        <h2 className="text-lg font-semibold text-center">Add your NFTPORT API key</h2>
        <div className="mt-20 flex flex-col sm:flex-row sm:items-center justify-center">
          <input
            type="password"
            itemRef="api"
            className="border rounded px-3 py-2 w-full sm:w-[60%] mb-2 sm:mb-0 sm:mr-2"
            placeholder="Enter your API key"
            value={apiKey}
            onChange={handleApiKeyChange}
          />
          {localApi === null ? (
            <button
              type="button"
              className={`${
                apiKey ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400"
              } text-white py-2 px-4 rounded`}
              onClick={handleSave}
              disabled={!apiKey} // Disable the Save button when the input field is empty
            >
              Save
            </button>
          ) : (
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApiModal;
