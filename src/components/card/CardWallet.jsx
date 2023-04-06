import React, { useState } from "react";
import imgPlace from "../../assets/imgPlaceHolder.svg";

const CardWallet = ({ nft }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // console.log(nft);

  return (
    <div className="card w-50 bg-base-100 shadow-xl m-5 carousel-item">
      <figure>
        <img src={nft.cached_file_url || imgPlace} alt="nft_image" className="h-80" />
      </figure>
      <div className="card-body">
        <h2 className="card-title h-8">{nft.name}</h2>
        <div className="w-max mx-auto mt-5">
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
                    className="h-[22rem] mx-auto"
                  />
                  <h3 className="text-lg font-bold my-4">{nft.name}</h3>
                  <p className="py-4">{nft.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWallet;
