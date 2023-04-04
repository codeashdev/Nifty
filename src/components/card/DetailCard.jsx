import React from "react";

const DetailCard = ({ details }) => (
  <div className="flex flex-col p-5 bg-red-500 h-20 w-20">
    {details.map(((detail) => (
      <h1 key={detail}>
        <span className="text-3xl font-bold">
          {detail.trait_type}
          :
        </span>
        {" "}
        {detail.value}
      </h1>
    )))}
  </div>
);
export default DetailCard;
