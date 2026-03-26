import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({data , selectedPlayers , setSelectedPlayers}) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
            {
                data.map((SinglePlayer , ind) => {
                   return(
                     <PlayerCard 
                     selectedPlayers={selectedPlayers}
                     setSelectedPlayers={setSelectedPlayers}
                    key={ind}
                    SinglePlayer={SinglePlayer}
                    ></PlayerCard>
                   )
                })
            }
        </div>
    );
};

export default AvailablePlayers;