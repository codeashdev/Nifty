import React from "react";

function ContractDetail({ contract, total }) {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center shadow-lg mx-20 my-8 p-8">
      <div className="rounded-full">
        <img src={contract.metadata.cached_thumbnail_url} alt="nft_image" className="w-80" />
      </div>

      <div className="w-3/4 lg:w-1/2 text-sm lg:text-base">
        <div className="mb-4">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900">{contract.name}</h2>
          <p className="text-gray-600 font-bold">{contract.symbol}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900">Total:</h2>
          <p className="text-gray-600 font-bold">{total}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900">Description:</h3>
          <p className="text-gray-600 w-full font-bold text-start sm:text-justify lg:w-3/4">{contract.metadata.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ContractDetail;
