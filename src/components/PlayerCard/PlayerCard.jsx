import React, { useState } from "react";
import { FaFlag, FaRegUser } from "react-icons/fa";
import { toast } from "react-toastify";

const PlayerCard = ({ SinglePlayer , selectedPlayers , setSelectedPlayers , coin , setCoin}) => {

  const [isSelected , setIsSelected] = useState(false);

  const handleChoosePlayer = () => {
    

      let newCoin = coin - SinglePlayer.price
    if(newCoin <= 0){
      toast.error('Not Enough Coin To Purchase' ,
        {position: "bottom-center"});
      return;
    }else{
      setIsSelected(true);
      setCoin(newCoin);
      toast.success('Player Selected', {position: "bottom-center"});
    }

    setSelectedPlayers([...selectedPlayers , SinglePlayer])
  }

  return (
    <div className="card bg-base-100 sm:w-80 md:w-96 shadow-sm">
      <figure 
      style={{
    background: '#0e0e1a',
    backgroundImage: `
      radial-gradient(circle at 0% 50%, rgba(120,60,200,0.55), transparent 60%),
      radial-gradient(circle at 100% 50%, rgba(180,60,120,0.45), transparent 60%)
    `
  }}
      >
        <img className="max-h-75" src={SinglePlayer.image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
            <FaRegUser></FaRegUser>
            {SinglePlayer.playerName}</h2>
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-[#131313]/70"> <FaFlag></FaFlag> {SinglePlayer.playerCountry}</h3>
              <button className="btn">{SinglePlayer.playerType}</button>
            </div>
             <div className="divider"></div>
             <h3 className="font-bold text-[16px]">Rating</h3>
             <div className="flex items-center justify-between mt-2">
              <h3 className="font-semibold text-[16px]">{SinglePlayer.battingStyle}</h3>
              <h3 className="font-semibold text-[16px] text-[#131313]/70">{SinglePlayer.bowlingStyle}</h3>
             </div>
        <div className="card-actions justify-between items-center mt-2">
          <h3 className="font-semibold text-[16px]">Price: {SinglePlayer.price}</h3>

          <button 
          disabled={isSelected}
          onClick={handleChoosePlayer}
          className="btn btn-neutral">{
            isSelected ? "Selected" : "Choose Player"
          }</button>

        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
 