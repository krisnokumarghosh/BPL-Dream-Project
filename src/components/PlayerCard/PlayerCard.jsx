import React from "react";
import { FaRegUser } from "react-icons/fa";

const PlayerCard = ({ SinglePlayer }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="bg-gray-600">
        <img className="max-h-75" src={SinglePlayer.image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
            <FaRegUser></FaRegUser>
            {SinglePlayer.playerName}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
