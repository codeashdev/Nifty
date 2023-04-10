import React, { useState } from "react";

import imgPlace from "../../assets/imgPlaceHolder.svg";

const CardNFT = ({ nft }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="card w-50 bg-base-100 shadow-xl m-5 carousel-item">
      <figure>
        <img src={nft.cached_file_url} alt="nft_image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{nft.metadata.name}</h2>
        <p className="font-bold text-lg hover:opacity-80 mt-4">
          {" "}
          <a href={`https://opensea.io/${nft.owner}`} target="_blank" rel="noreferrer">
            Owner
          </a>
        </p>

        <div className="card-actions justify-end h-20">
          <button type="button" className="btn w-max mx-auto mt-5" onClick={handleModalOpen}>
            Details
          </button>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex justify-center items-center">
              <div className="absolute inset-0 bg-black opacity-50" />
              <div className="modal-box relative bg-white p-6 rounded-lg shadow-lg">
                <button
                  type="button"
                  className="btn btn-sm btn-circle absolute top-2 right-2"
                  onClick={handleModalClose}
                >
                  ✕
                </button>
                <img
                  src={nft.cached_file_url || imgPlace}
                  alt="nft_image"
                  className="h-fit  mx-auto"
                />
                <h3 className="text-3xl font-bold my-4">{nft.metadata.name}</h3>
                {/* <p className="text-xl font-semibold my-4">Attributes:</p> */}
                <div className="overflow-x-auto">
                  <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                      <tr>
                        <th className="text-lg font-semibold my-4">Trait Type</th>
                        <th className="text-lg font-semibold my-4">Value</th>
                      </tr>
                    </thead>
                    {nft.metadata.attributes.map((attribute) => (
                      <tbody key={attribute.trait_type + attribute.trait_type + nft.metadata.owner}>
                        <tr>
                          <td className="text-md font-semibold my-4">{attribute.trait_type}</td>
                          <td className="text-md font-semibold my-4 italic">{attribute.value}</td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardNFT;
