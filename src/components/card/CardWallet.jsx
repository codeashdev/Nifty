import React from "react";

import imgPlace from "../../assets/imgPlaceHolder.svg";

const CardWallet = ({ nft }) => (
  <div className="card w-50 bg-base-100 shadow-xl m-5 carousel-item">
    <figure>
      <img src={nft.cached_file_url || imgPlace} alt="nft_image" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{nft.name}</h2>
      {/* <p className="font-bold text-lg hover:opacity-80">
        {" "}
        <a href={`https://opensea.io/${nft.owner}`} target="_blank" rel="noreferrer">
          Owner
        </a>
      </p> */}

      <div className="card-actions justify-end">
        <button type="button" className="btn w-max mx-auto mt-5">
          Learn now!
        </button>
      </div>
    </div>
  </div>
);

export default CardWallet;
