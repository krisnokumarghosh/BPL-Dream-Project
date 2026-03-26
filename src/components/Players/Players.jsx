import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const Players = ({playersPromise , coin , setCoin}) => {
    const data = use(playersPromise);

    const [selectedType , setSelectedType] = useState("available");
    const [selectedPlayers , setSelectedPlayers] = useState([]);
    
    return (
        <div className='mt-16 container mx-auto mb-60'>
        <div className='md:flex justify-between items-center mb-8'>
            {
                selectedType === "available" ? 
                (<h2 className='text-[22px] font-bold'>Available Players</h2>) : 
                (<h2 className='text-[22px] font-bold'>Selected Players ({selectedPlayers.length}/{data.length})</h2>)
            }
            <div className='flex items-center'>

                <button 
                onClick={() => setSelectedType("available")}
                className={`btn border-0 rounded-r-none rounded-l-xl font-bold ${selectedType === "available" ? 
                "bg-[#E7FE29]" : 'btn'}`}>Available</button>
                
                
                <button 
                onClick={() => setSelectedType("selected")}
                className={`btn font-bold rounded-l-none rounded-r-xl ${selectedType === "selected" ? 
                "bg-[#E7FE29]" : 'btn'}`}>Selected({selectedPlayers.length})</button>

            </div>
        </div>
        {
            selectedType === "available" ? 
            <AvailablePlayers 
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            data={data}></AvailablePlayers> :
            
            <SelectedPlayer
             coin={coin}
             setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            ></SelectedPlayer>
        }
        </div>
    );
};

export default Players;